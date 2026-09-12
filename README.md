# Squad B — Site institucional + Chat com IA

Projeto do Squad B (turma de Análise e Desenvolvimento de Sistemas),
refatorado a partir do projeto original do 1º período como atividade
avaliativa do 1º ciclo.

## Estrutura de pastas

```
├─ src/
│  ├─ pages/     # Páginas HTML do site (home, sobre, contato, etc.)
│  ├─ styles/    # CSS de cada página + do widget de chat
│  ├─ js/        # JavaScript do front-end (widget de chat)
│  └─ server/    # Backend Node/Express (serve o site e a rota /api/chat)
│
├─ assets/
│  ├─ img/       # Imagens (fotos, logos, ícones de projeto)
│  └─ svg/       # Ícones SVG (skills)
│
├─ docs/
│  └─ REFATORACAO.md   # Registro das melhorias feitas na refatoração
│
├─ config/
│  └─ .env.example      # Modelo de variáveis de ambiente (chave de API)
│
├─ data/
│  └─ metadata.json     # Metadados do squad
│
├─ tests/                # Reservado para testes automatizados (ainda não há)
│
├─ .gitignore
├─ package.json
└─ README.md
```

## Como rodar

```bash
npm install
cp config/.env.example config/.env   # depois edite e cole sua ANTHROPIC_API_KEY
npm start
```

Acesse `http://localhost:3000` (redireciona automaticamente para a Home).

## Documentação

Veja [`docs/REFATORACAO.md`](docs/REFATORACAO.md) para o detalhamento
de tudo que foi corrigido e melhorado em relação ao projeto original.
