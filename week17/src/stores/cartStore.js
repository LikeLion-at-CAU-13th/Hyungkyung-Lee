import {create} from 'zustand';
import {persist} from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set, get) => ({
            // 상태
            cartItems: [],
            discount: 0,
            loading: false,
            // 액션
            // 장바구니에 상품 추가 (이미 있으면 수량 증가)
            addItem: (product) => {
                set((state) => {
                    const existingItem = state.cartItems.find(
                        (item) => item.name === product.name && item.price === product.price    // item.name과 item.price가 같으면 수량만 +1, 아니면 새 상품 추가
                    );
                    if (existingItem) {
                        return {
                            cartItems: state.cartItems.map((item) =>
                                item.name === product.name && item.price === product.price
                                ? { ...item, quantity: item.quantity + 1 } : item
                                ),
                        };
                    }
                    return {
                        cartItems: [...state.cartItems, { ...product, id: Date.now(), quantity: 1, checked: true }],    // 상품 객체에 속성 추가
                    };
                });
            },
            removeItem: (id) =>
                set((state) => ({
                    cartItems: state.cartItems.filter((item) => item.id !== id),
                })),
            // 특정 상품의 수량 변경
            updateQuantity: (id, quantity) =>
                set((state) => ({
                    cartItems: state.cartItems.map((item) =>
                    item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
                    ),
                })),
            // 체크 여부에 따라 총 가격 계산 대상이 됨 
            toggleItemChecked: (id) =>
                set((state) => ({
                    cartItems: state.cartItems.map((item) =>
                    item.id === id ? { ...item, checked: !item.checked } : item
                    ),
                })),
            // 전체 선택/해제
            toggleSelectAll: () =>
                set((state) => {
                    const allChecked = state.cartItems.every(item => item.checked);
                    return {
                        cartItems: state.cartItems.map((item) => ({
                            ...item,
                            checked: !allChecked
                        }))
                    };
                }),
            // 선택된 항목들 삭제
            removeSelectedItems: () =>
                set((state) => ({
                    cartItems: state.cartItems.filter(item => !item.checked)
                })),
            // 할인 코드 적용 (비동기 1초 처리)
            applyDiscount: async (code) => {
                set((state) => ({ ...state, loading: true }));
                await new Promise((resolve) => setTimeout(resolve, 1000));
                const discountMap = {
                    'XAERINOO': 0.1,    // 10% 할인 쿠폰
                    'ILOVECAU': 0.5,    // 50% 할인 쿠폰
                };
                // 할인율은 discount 상태에 저장
                const discount = discountMap[code.toUpperCase()] || 0;  // toUpperCase() 메서드는 문자열을 대문자로 변환해 반환한다.
                console.log('discount 적용됨:', discount);                
                if (!discount) alert('유효하지 않은 할인 코드입니다.');
                set((state) => ({ ...state, discount, loading: false }));
            },
            // 체크된 상품들의 총 원가 계산 (할인 전)
            getOriginalTotalPrice: () =>
                get().cartItems.reduce(
                    (total, item) =>
                        item.checked ? total + ((item.price || 0) * (item.quantity || 1)) : total, 0
                ),
            // 할인 적용 후 총 가격 계산
            getTotalPrice: () => {
                const total = get().cartItems.reduce(
                    (total, item) =>
                        item.checked ? total + item.price * item.quantity : total, 0, 
                    );
                return total * (1 - get().discount);
                },
        }),
        {
            name: 'cart-storage',   // 로컬 스토리지에 cart-storage라는 키로 상태를 저장
        }
    )
);

export default useCartStore;