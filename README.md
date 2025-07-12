# Aprendendo a fazer forks

## Fazer o fork
Entrar no site: https://github.com/Pietro2704/12_07

clicar no botão fork e criar

git clone https://github.com/seu-usuario/seu-repositorio.git

cd 12_07
git remote add upstream https://github.com/Pietro2704/12_07.git
git remote -v
git fectch

git branch nova_branch
git switch nova_branch

(alterações) -> index.html
git add .
git commit -m 'fiz alterações'
git push origin nova_branch