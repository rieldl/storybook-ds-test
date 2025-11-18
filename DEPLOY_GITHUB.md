# 🚀 Deploy do Storybook no GitHub Pages

Guia passo a passo para fazer deploy do seu Storybook no GitHub Pages.

## ✅ Status Atual

- ✓ Git inicializado
- ✓ Credenciais configuradas (rieldl / rieldelima@gmail.com)
- ✓ GitHub Actions configurado
- ✓ Commit inicial criado (53 arquivos, 11573 linhas)

## 📝 Próximos Passos

### 1️⃣ Criar Repositório no GitHub

#### Opção A: Via Browser (Recomendado)

1. Acesse [https://github.com/new](https://github.com/new)

2. Preencha os dados:
   - **Repository name:** `storybook-ds-test`
   - **Description:** Design System Aurora with Storybook documentation
   - **Visibility:** Public (necessário para GitHub Pages grátis)
   - **NÃO** marque "Add a README file"
   - **NÃO** marque "Add .gitignore"
   - **NÃO** marque "Choose a license"

3. Clique em **"Create repository"**

#### Opção B: Via GitHub CLI (gh)

```bash
# Se você tem o GitHub CLI instalado
gh repo create storybook-ds-test --public --source=. --remote=origin
```

### 2️⃣ Conectar o Repositório Local ao GitHub

Após criar o repo no GitHub, execute estes comandos:

```bash
# Adicionar o remote origin
git remote add origin https://github.com/rieldl/storybook-ds-test.git

# Renomear branch para main (se necessário)
git branch -M main

# Fazer o push
git push -u origin main
```

### 3️⃣ Configurar GitHub Pages

1. No GitHub, vá para o repositório: `https://github.com/rieldl/storybook-ds-test`

2. Clique em **Settings** (⚙️)

3. No menu lateral, clique em **Pages**

4. Em "Build and deployment":
   - **Source:** GitHub Actions
   - (Não precisa selecionar branch, pois usamos GitHub Actions)

5. Salve (se houver botão de save)

### 4️⃣ Aguardar o Deploy

1. Vá para a aba **Actions** do repositório:
   `https://github.com/rieldl/storybook-ds-test/actions`

2. Você verá o workflow "Deploy Storybook to GitHub Pages" rodando

3. Aguarde terminar (geralmente 1-3 minutos)

4. Quando terminar, seu Storybook estará disponível em:
   **https://rieldl.github.io/storybook-ds-test/**

## 🔐 Autenticação (Se Necessário)

Se for solicitada autenticação ao fazer `git push`:

### Opção 1: HTTPS com Token (Recomendado)

1. Crie um Personal Access Token:
   - Vá para: https://github.com/settings/tokens
   - Clique em "Generate new token" → "Generate new token (classic)"
   - Marque o scope: `repo` (Full control of private repositories)
   - Clique em "Generate token"
   - **COPIE O TOKEN** (você não verá novamente!)

2. Ao fazer push, quando pedir senha, cole o TOKEN (não sua senha do GitHub)

```bash
Username: rieldl
Password: <cole-o-token-aqui>
```

### Opção 2: SSH (Alternativa)

Se preferir usar SSH:

```bash
# Gerar chave SSH (se não tiver)
ssh-keygen -t ed25519 -C "rieldelima@gmail.com"

# Copiar a chave pública
cat ~/.ssh/id_ed25519.pub

# Adicionar ao GitHub:
# https://github.com/settings/ssh/new
```

Depois mudar o remote para SSH:
```bash
git remote set-url origin git@github.com:rieldl/storybook-ds-test.git
```

## 🔄 Atualizações Futuras

Depois do setup inicial, para fazer updates:

```bash
# 1. Fazer mudanças nos arquivos

# 2. Commit
git add .
git commit -m "Update: descrição da mudança"

# 3. Push (dispara deploy automático!)
git push
```

O GitHub Actions fará o deploy automaticamente! 🎉

## 📊 Verificar Status do Deploy

```bash
# Ver status do último workflow
gh run list --limit 1

# Ver logs do workflow
gh run view
```

Ou acesse: https://github.com/rieldl/storybook-ds-test/actions

## 🎯 URLs Importantes

| Recurso | URL |
|---------|-----|
| **Storybook Live** | https://rieldl.github.io/storybook-ds-test/ |
| **Repositório** | https://github.com/rieldl/storybook-ds-test |
| **Actions** | https://github.com/rieldl/storybook-ds-test/actions |
| **Settings** | https://github.com/rieldl/storybook-ds-test/settings |
| **Pages** | https://github.com/rieldl/storybook-ds-test/settings/pages |

## 🐛 Troubleshooting

### Erro: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/rieldl/storybook-ds-test.git
```

### Erro: "Authentication failed"
- Use um Personal Access Token em vez da senha
- Ou configure SSH keys

### Erro: "GitHub Pages not found"
- Verifique se o repositório é público
- Aguarde alguns minutos após o primeiro deploy
- Verifique se GitHub Actions está habilitado

### Deploy falhou no Actions
- Verifique os logs no tab Actions
- Geralmente é problema de dependências (rode `npm install` localmente)

## 📚 Próximos Passos

Após o deploy, você pode:

1. ✅ Compartilhar o link do Storybook
2. ✅ Adicionar badges no README
3. ✅ Configurar domínio customizado (opcional)
4. ✅ Continuar desenvolvendo components
5. ✅ Cada push na main atualiza automaticamente!

## 🎨 Badge do Storybook

Adicione este badge no seu README:

```markdown
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://rieldl.github.io/storybook-ds-test/)
```

---

**Feito! Agora é só criar o repo no GitHub e fazer o push! 🚀**
