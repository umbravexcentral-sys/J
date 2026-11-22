# PRONAC Academy — Etapa 1 (site, temas, contas)

## Rodar no seu computador (Node 22.6 ou mais novo)
1. `npm install`
2. Crie um projeto grátis em supabase.com. Em *SQL Editor*, cole e execute, em ordem, os 4 arquivos de `supabase/migrations/` (0001 a 0004).
3. Copie `.env.example` para `.env.local` e preencha com a URL e a chave *anon* do projeto (Project Settings > API).
4. `npm run dev` e abra http://localhost:3000

Sem o passo 2/3 o site abre normalmente como visitante (tema salvo só no aparelho); cadastro e login avisam que falta configurar.

## O que tem
- `design-tokens/`: 18 temas, 109 tokens, verificação de contraste (`npm run themes` roda antes de dev/build).
- Tailwind só com cores semânticas (cor fixa não compila).
- Cabeçalho, rodapé, navegação inferior no celular, Home modular, `AdSlot` (desligado), cadastro/login/sair.
- Configurações > Aparência: 18 temas, prévia isolada, modo claro/escuro/automático, cor de destaque, salvamento automático, sync em tempo real.
- `supabase/migrations/0001_foundation.sql`: perfis, privacidade (tudo privado por padrão), consentimentos, papéis/permissões, preferências, auditoria, RLS, perfil público por view.

## Etapa 1 (completa) e Etapa 2 (núcleo)
- Etapa 1: temas, contas, recuperação de senha, perfil e privacidade, foto de perfil, Aparência completa, páginas institucionais, `npm run check:colors`, `npm run storybook` (matriz de todos os temas), `npm run test:e2e` (temas, acessibilidade e sincronização; veja `tests/`).
- Etapa 2: Wiki em `/wiki` (categorias, ordem alfabética, conceito do dia, verbete com histórico), busca em `/busca` com tolerância a erro de digitação, sugestões de correção com justificativa e fontes, acompanhamento em `/configuracoes/sugestoes`, registro público das sugestões analisadas, análise pela equipe em `/admin/sugestoes`, seis verbetes iniciais.

## Dar poder de editor a uma conta
No SQL Editor: `insert into user_roles (user_id, role_key) select id, 'admin' from auth.users where email = 'SEU@EMAIL';` (repita com 'editor'). Para publicar uma revisão: `select publish_wiki_revision('<id do verbete>', '<json do conteúdo>'::jsonb, 'resumo da mudança', '<id da sugestão ou null>');`

## Ainda não feito
Etapa 2: editor visual de verbetes (hoje a publicação é por SQL), aprovação por dois editores em Ideologias, comparação entre versões, mapa de conexões, histórico de leitura, verbetes recomendados. Etapas 3 a 9 do documento (Academia, comunidade, notificações, notícias, observatório, consolidação).
Textos de Privacidade, Termos, Contato e Equipe são rascunhos. Nada foi executado além da validação de temas e cores: espere ajustes no primeiro `npm run dev`.
