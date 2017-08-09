# Dicas para fazer um Pull Request


### O que é?
Primeiro vamos entender o que é um PR, ou Pull Request! :D

Basicamente, Pull Request é quando você envia uma sugestão de melhoria para o repositório. Você fez uma alteração no código e envia
suas alterações para ser juntada com o código original.

O dono do repositório, que também pode ser você, podera analisar linha por linha do seu código pra poder decidir se quer ou não juntar sua 
sugestão com seu código original.


### Porque fazer?
Focando aqui no nosso grupo, o PR vai facilitar MUITO na hora de "corrigir" e auxiliar vocês durante o processo.
Como disse ali em cima, podemos analisar linha por linha e até fazer comentários com sugestões de melhorias <3


### Como fazer?
Primeiro de tudo, precisamos entender o fluxo de branchs do GIT. Para não extender muito aqui, sugiro que leiam [este artigo](https://blog.da2k.com.br/2015/02/04/git-e-github-do-clone-ao-pull-request/)
do Fernando Daciuck. Ali ele explica todo o processo des do clone até o PR final.

Mas vamos listar aqui o passo a passo de como dar um PR :D

### Meu PR <3

1º - Criar uma branch nova e trocar para esta branch.

```
git checkout -b minha_branch_nova
```


2º - Fazer suas alterações, e commitar :D

```
git add --all
git commit -m "Mensagem do seu commit" 
```

3º - Fazer um push para o repositório. Nesta etapa, precisamos dar um push na nossa branch nova e NÃO na master :)

```
git push origin minha_branch_nova
```

4ª - Enviando o PR pelo GitHub
Agora acesse a conta do repositório original no Github, e você verá uma mensagem falando que um novo push foi feito.

Depois é só clicar no botão verde Compare & Pull Request que possuimos aí e pronto :D 
Enviem o link do PR pra gente \o/

