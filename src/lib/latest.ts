/** Só a resposta da chamada mais recente: troca de aba, busca ou página sem a antiga sobrescrever a nova. */

/** Cria um guardião; cada chamada devolve `undefined` se outra mais nova começou depois dela. */
export function latestCall() {
  let latest = 0
  return async <T>(request: () => Promise<T>): Promise<T | undefined> => {
    const mine = ++latest
    try {
      const result = await request()
      return mine === latest ? result : undefined
    } catch (error) {
      if (mine !== latest) return undefined
      throw error
    }
  }
}
