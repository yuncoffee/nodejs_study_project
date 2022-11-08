// 추가적으로 응용하고 싶으면 하던가
export const handleCalcComflex = (a: number, b: number) => {
    return a + (b / b) * b + a - 2 * b
}

console.log("결과는", handleCalcComflex(1, 3))
