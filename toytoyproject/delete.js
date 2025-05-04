const baseURL = '/api/post/';

function getIdFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

document.getElementById('delete-form').addEventListener('submit', async function(e) {
    e.preventDefault(); //방명록 증식 방지

    const id = getIdFromQuery();
    const password = document.getElementById('password-input').value;

    if (!id || !password) {
        alert('비밀번호를 입력하세요.');
        return;
    }

    try {
        const response = await fetch(`${baseURL}${id}/`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password })
        });

        const result = await response.json();

        if (response.ok) {
            alert('방명록이 삭제되었습니다!');
            window.opener.postMessage('refreshNotes', '*');
            window.close();
        } else {
            alert(result.message || '비밀번호가 일치하지 않습니다!');
        }
    } catch (error) {
        alert('삭제 중 오류가 발생했습니다!');
        console.error(error);
    }
});
