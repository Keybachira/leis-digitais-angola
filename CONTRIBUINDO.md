# Como contribuir

Obrigado por ajudares a manter a legislação digital angolana acessível.

## Regras

1. **Fonte oficial obrigatória.** Copia o texto do Diário da República (ou de outra fonte oficial) e indica o link em `fonte_oficial`.
2. **Data de verificação.** Preenche `verificado_em` com a data em que confirmaste o texto.
3. **Estado correcto.** Usa `em vigor`, `alterada` ou `revogada`.
4. **Sem interpretações.** Este repositório guarda os textos, não comentários jurídicos.
5. **Um ficheiro por diploma**, com nome em minúsculas e sem acentos: `protecao-dados-pessoais-lei-22-11.md`.

## Onde colocar

- Leis: `leis/`
- Decretos e regulamentos: `regulamentos/`

## Modelo de ficheiro

```markdown
---
tipo: Lei
titulo: "Lei de Protecção de Dados Pessoais"
numero: "Lei n.º 22/11"
data_publicacao: "2011-06-17"
estado: em vigor
tema: [protecção de dados, privacidade]
fonte_oficial: "https://..."
verificado_em: "2026-10-23"
---

### Artigo 1.º
(texto oficial)
```

Para regulamentos usa `tipo: Regulamento`. Escreve as datas sempre entre aspas.

## Processo

Faz *fork*, cria o ficheiro, abre um *pull request*. Se encontrares um erro num texto já publicado, abre uma *issue* com o link da fonte.
