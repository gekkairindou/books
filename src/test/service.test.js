// テスト対象の TestService クラスのインスタンスを index.js から読み込む
const service = require('./index');

// ここから下にテストを記述

describe('TestService', () => {
    // ここにテストを追加
    test('2 times 2 should be 4', () => {
        const result = service.multiplyNum(2, 2);
        expect(result).toBe(4);
    });

    test('2 times 5 should be 10', () => {
        const result = service.multiplyNum(2, 5);
        expect(result).toBe(10);
    });

    it ('3 times 3 should be 9', () => {
        const result = service.multiplyNum(3, 3);
        expect(result).toBe(9);
    })
});