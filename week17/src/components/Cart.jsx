import React, { useState } from 'react'
import useCartStore from '../stores/cartStore'
import styled from 'styled-components';
import { importImage } from './ProductList';

const Cart = () => {
    const {
        cartItems,
        removeItem,
        updateQuantity,
        toggleItemChecked,
        toggleSelectAll,
        removeSelectedItems,
        applyDiscount,
        discount,
        loading,
        getOriginalTotalPrice,
        getTotalPrice,
    } = useCartStore();
    const [discountCode, setDiscountCode] = useState('');

    const handleApplyDiscount = (e) => {
        e.preventDefault();
        applyDiscount(discountCode);
        setDiscountCode('');
    };

  return (
    <CartContainer>
      <CartTitle>장바구니 🛒</CartTitle>
      <CartForm onSubmit={handleApplyDiscount}>
        <CartInput
          type="text"
          placeholder="할인 코드 입력"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <ApplyButton type="submit" disabled={loading}>
          {loading ? '처리 중...' : '적용'}
        </ApplyButton>
      </CartForm>
      {discount > 0 ? (
        <DiscountMessage color="hotpink">{discount * 100}% 할인 적용됨</DiscountMessage>
      ) : (
        <DiscountMessage>할인 코드가 적용되지 않았습니다.</DiscountMessage>
      )}
      {cartItems.length === 0 ? (
        <EmptyMessage>장바구니가 비어있습니다.</EmptyMessage>
      ) : (
        <>
          <SelectionControls>
            <SelectAllButton onClick={toggleSelectAll}>
              {cartItems.every(item => item.checked) ? '전체 해제' : '전체 선택'}
            </SelectAllButton>
            <SelectedCount>
              ({cartItems.filter(item => item.checked).length}/{cartItems.length})
            </SelectedCount>
            {cartItems.some(item => item.checked) && (
              <DeleteSelectedButton onClick={removeSelectedItems}>
                선택 삭제
              </DeleteSelectedButton>
            )}
          </SelectionControls>
          <CartList>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked || false}
                  onChange={() => toggleItemChecked(item.id)}
                />
                <ItemImage
                  src={importImage(item.name)}
                  alt={item.name}
                />
                <ItemDetails>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
                    <ItemInfo>
                        <QuantityButton onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}>
                          -
                        </QuantityButton>
                        <ItemQuantity>{item.quantity}</ItemQuantity>
                        <QuantityButton onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>
                          +
                        </QuantityButton>
                    </ItemInfo>
                </ItemDetails>
                <DeleteButton onClick={() => removeItem(item.id)}>X</DeleteButton>
              </CartItem>
            ))}
          </CartList>
          <TotalPrice>
            주문 금액:{' '}
            {discount > 0 ? (
              <>
                <span style={{ textDecoration: 'line-through' }}>
                  {getOriginalTotalPrice().toLocaleString()}원
                </span>{' → '}
                <span>{getTotalPrice().toLocaleString()}원</span>
              </>
            ) : (
              <span>{getTotalPrice().toLocaleString()}원</span>
            )}
          </TotalPrice>
        </>
      )}
    </CartContainer>
  );
};

export default Cart

const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;
  height: 100vh;
  background: #ffffff;
  border-left: 1px solid #e0e0e0;
  padding: 20px;
  overflow-y: auto;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
`;

const CartTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 20px;
  text-align: center;
  color: #333;
`;

const CartForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const CartInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ApplyButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

const DiscountMessage = styled.p`
  color: ${(props) => props.color || 'gray'};
  font-size: 0.9rem;
  margin: 0 0 20px;
  text-align: center;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #555;
  font-size: 1rem;
`;

const CartList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CartItem = styled.li`
  display: flex;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const ItemPrice = styled.span`
  font-size: 1rem;
  color: #555;
`;

const ItemQuantity = styled.span`
  font-size: 1rem;
  color: #000000;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #555;
  cursor: pointer;
`;

const TotalPrice = styled.h3`
  margin: 20px 0 20px 0;
  padding-bottom: 20px;
  text-align: center;
  color: #333;
`;

const SelectionControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 8px;
`;

const SelectAllButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const SelectedCount = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-left: auto;
`;

const DeleteSelectedButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #c82333;
  }
`;