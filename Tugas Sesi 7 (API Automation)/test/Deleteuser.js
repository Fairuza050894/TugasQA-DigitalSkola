const assert = require('chai').assert;

describe('DELETE - Delete User', function () {
    const url = 'https://reqres.in/api/users/2';
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
    };

    it('delete user successfully', async function () {
        const res = await fetch(url, {
            method: 'DELETE',
            headers
        });
        console.log('DELETE Response:', res.status);
        assert.strictEqual(res.status, 204, 'Status code should be 204');
    });
});
