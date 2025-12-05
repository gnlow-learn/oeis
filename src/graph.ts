const arr0 =
(n: number) =>
    Array.from({ length: n }).fill(0) as number[]

const nonn = function* () {
    for (let i=0; true; i++) {
        yield i
    }
}

const conv =
(a: number[], b: number[]) =>
    a.flatMap((a, i) => b.map((b, j) => [i+j, a*b]))
        .reduce(
            (p, [i, x]) => (p[i] += x, p),
            arr0(a.length+b.length),
        )
const subs =
(t: number[], k: number) =>
    nonn().map(n =>
        n%k == 0 && n/k < t.length
            ? t[n/k]
            : 0
    )
const phi3 =
(t: number[], n: number) => {
    const t2 = conv(t, t)
    const t3 = conv(t2, t)
    const t_z2 = subs(t, 2).take(n+1).toArray()
    const t_z3 = subs(t, 3).take(n+1).toArray()
    const t_tz2 = conv(t, t_z2)
    return nonn().map(k =>
        (t3[k] + 3*t_tz2[k] + 2*t_z3[k]) / 6
    )
}

console.log(conv([1,1,0,0], [1,2,0,0]))
console.log(subs([1,1,1,2,4], 3).take(5).toArray())
console.log(phi3([1,1,1], 2).take(3).toArray())
