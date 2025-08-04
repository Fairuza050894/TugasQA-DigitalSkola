const assert = require('chai').assert;

describe('GET - Single User', function () {
    const url = 'https://reqres.in/api/users/2';
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
    };

    it('get user successfully', async function () {
        const res = await fetch(url, {
            method: 'GET',
            headers
        });
        const data = await res.json();
        assert.strictEqual(res.status, 200, 'Status code should be 200');
        assert.strictEqual(data.data.id, 2, 'User ID should be 2');
    });
});
