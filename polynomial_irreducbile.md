
# Analysis of $P(x) = x^5 + 10x^3 + 20x - 4$

## 1. Recognizing the De Moivre Quintic Structure

This polynomial has the form of a **De Moivre quintic**:
$$x^5 + 5ax^3 + 5a^2x + b = 0$$
with $a = 2$ and $b = -4$, since $5(2) = 10$ and $5(2^2) = 20$.

### Solving via the substitution $x = u - \frac{a}{u} = u - \frac{2}{u}$

Computing $x^5 + 10x^3 + 20x$ with this substitution, all intermediate terms cancel beautifully:
$$P(x) = u^5 - \frac{32}{u^5} - 4 = 0$$

Multiplying by $u^5$ and setting $v = u^5$:
$$v^2 - 4v - 32 = 0 \implies (v-8)(v+4) = 0$$

So $u^5 = 8$ or $u^5 = -4$. Taking $u^5 = 8$, we get $u = 2^{3/5}\zeta_5^k$ for $k = 0,1,2,3,4$, where $\zeta_5 = e^{2\pi i/5}$.

Since $\frac{2}{u} = \frac{2}{2^{3/5}\zeta_5^k} = 2^{2/5}\zeta_5^{-k}$, the **five roots** are:

$$\boxed{x_k = 2^{3/5}\zeta_5^k - 2^{2/5}\zeta_5^{-k}, \quad k = 0, 1, 2, 3, 4}$$

---

## 2. Irreducibility over $\mathbb{Q}$

Apply Eisenstein's criterion to $P(x+1)$:
$$P(x+1) = x^5 + 5x^4 + 20x^3 + 40x^2 + 55x + 27$$
With $p = 5$: $5 \mid 5, 20, 40, 55$; $5 \nmid 1$; $25 \nmid 27$. So $P(x+1)$ is irreducible, hence **$P(x)$ is irreducible over $\mathbb{Q}$**.

---

## 3. The Splitting Field and Galois Group

### The splitting field contains $\mathbb{Q}(2^{1/5}, \zeta_5)$

Let $\gamma = 2^{1/5}$. The roots are $x_k = \gamma^3\zeta_5^k - \gamma^2\zeta_5^{-k}$.

**Step 1: $\gamma \in K$.** We have $x_0 = \gamma^3 - \gamma^2$, so $x_0^2 = \gamma^4 + 2\gamma - 4$. Since $\mathbb{Q}(x_0) \subseteq \mathbb{Q}(\gamma)$ and $[\mathbb{Q}(\gamma):\mathbb{Q}] = 5$ is prime, we get $\mathbb{Q}(x_0) = \mathbb{Q}(\gamma)$, so $\gamma \in K$.

**Step 2: $\zeta_5 \in K$.** From the roots:
$$x_1 + x_4 = (\gamma^3 - \gamma^2)(\zeta_5 + \zeta_5^4) = x_0 \cdot \frac{-1+\sqrt{5}}{2} \implies \sqrt{5} \in K$$
$$x_1 - x_4 = (\gamma^3 + \gamma^2)(\zeta_5 - \zeta_5^4) \implies \zeta_5 - \zeta_5^4 \in K$$
Since both $\zeta_5 + \zeta_5^4$ and $\zeta_5 - \zeta_5^4$ are in $K$, we get $\zeta_5 \in K$.

Therefore $K = \mathbb{Q}(2^{1/5}, \zeta_5)$, and $[K:\mathbb{Q}] = [\mathbb{Q}(2^{1/5}):\mathbb{Q}] \cdot [\mathbb{Q}(\zeta_5):\mathbb{Q}] = 5 \times 4 = 20$.

### The Galois group is $F_{20}$

The Galois group $G = \text{Gal}(K/\mathbb{Q})$ is a transitive subgroup of $S_5$ of order 20. The only such group is the **Frobenius group $F_{20} \cong C_5 \rtimes C_4$**.

We can confirm this via the **discriminant**:
$$\Delta = 5^5(b^2 + 4a^3)^2 = 5^5(16 + 32)^2 = 5^5 \cdot 48^2 = 2^8 \cdot 3^2 \cdot 5^5 = 7{,}200{,}000$$
Since $\Delta = 5 \cdot 1200^2$ is **not** a perfect square, $G \not\subseteq A_5$, ruling out $C_5$ and $A_5$.

### Structure of $F_{20}$ and conjugacy classes

Elements of $F_{20}$ act on roots as affine maps $k \mapsto bk + 3a \pmod{5}$, where $\sigma(\zeta_5) = \zeta_5^b$ and $\sigma(2^{1/5}) = 2^{1/5}\zeta_5^a$.

| $b \pmod{5}$ | Cycle type | # elements | Density |
|:---:|:---:|:---:|:---:|
| $b=1, a=0$ | $(1,1,1,1,1)$ — splits completely | 1 | $1/20$ |
| $b=1, a\neq 0$ | $(5)$ — irreducible | 4 | $1/5$ |
| $b=2,3$ | $(4,1)$ — linear × quartic | 10 | $1/2$ |
| $b=4$ | $(2,2,1)$ — linear × 2 quadratics | 5 | $1/4$ |

The value of $b$ is determined by $p \pmod{5}$ (since $\text{Frob}_p(\zeta_5) = \zeta_5^p$):
- $p \equiv 1 \pmod{5} \implies b=1$: type $(1^5)$ or $(5)$
- $p \equiv 2, 3 \pmod{5} \implies b=2,3$: type $(4,1)$
- $p \equiv 4 \pmod{5} \implies b=4$: type $(2,2,1)$

---

## 4. Factorization of $P(x) \pmod{p}$ for Various Primes

### Ramified primes ($p \mid \Delta$, i.e., $p = 2, 3, 5$)

$$p = 2: \quad P(x) \equiv x^5 \pmod{2}$$

$$p = 3: \quad P(x) \equiv (x - 1)(x^2 + 2x + 2)^2 \pmod{3}$$

$$p = 5: \quad P(x) \equiv (x + 1)^5 \pmod{5}$$

### Type $(4,1)$: linear × irreducible quartic ($p \equiv 2, 3 \pmod{5}$)

$$p = 7: \quad P(x) \equiv (x + 1)(x^4 + 6x^3 + 4x^2 + 3x + 3) \pmod{7}$$

$$p = 13: \quad P(x) \equiv (x + 2)(x^4 + 11x^3 + x^2 + 11x + 11) \pmod{13}$$

$$p = 17: \quad P(x) \equiv (x - 5)(x^4 + 5x^3 + x^2 + 5x + 11) \pmod{17}$$

### Type $(5)$: irreducible ($p \equiv 1 \pmod{5}$, 2 not a 5th power)

$$p = 11: \quad P(x) \text{ is irreducible} \pmod{11}$$

### Type $(2,2,1)$: linear × quadratic × quadratic ($p \equiv 4 \pmod{5}$)

$$p = 19: \quad P(x) \equiv (x - 15)(x^2 - 3x + 11)(x^2 - x + 12) \pmod{19}$$

### Type $(1,1,1,1,1)$: splits completely ($p \equiv 1 \pmod{5}$, 2 is a 5th power mod $p$)

For $p = 151$: $151 \equiv 1 \pmod{5}$ and $2^{30} \equiv 1 \pmod{151}$, so 2 is a 5th power mod 151.

$$p = 151: \quad P(x) \text{ splits into 5 linear factors} \pmod{151}$$

---

## 5. Summary

$$\boxed{\text{Splitting field} = \mathbb{Q}\!\left(2^{1/5},\, \zeta_5\right), \quad [\mathbb{Q}(2^{1/5}, \zeta_5) : \mathbb{Q}] = 20}$$

$$\boxed{\text{Galois group} = F_{20} \cong C_5 \rtimes C_4}$$

The factorization pattern of $P(x) \pmod{p}$ is completely governed by $p \pmod{5}$ and whether 2 is a 5th power residue mod $p$, in perfect agreement with the Chebotarev density theorem applied to $F_{20}$.
