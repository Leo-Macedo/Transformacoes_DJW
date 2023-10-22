# Atividade de tranformações no canvas
# Feito por: Leonardo Macêdo e Miguel Oliveira
# Descrição
Essa é uma ativade que vamos implementar as funções: Traslação, Rotação, Escala, Trasnform, Clipping Path e Colisão no canvas JavaScript.
# Greg
<img src="img/greg.jpg"><br>
O Greg nós fizemos utilizando: linhas, quadrados, curvas e círculos.<br>
## Código do Greg

https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/1629b989-f0fb-4b6e-8385-0bfb110f5972

<br>

# Paisagem
A paisagem nós fizemos utilizando: curvas e círculos. Fizemos nuvens, pedras e o chão.<br>
<img src="img/paisagem.jpg"><br>
## Código da paisagem


https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/45aaa950-ac6b-4c9c-9e8d-36399c9ada10


# Translação
<img src="img/trans.png"><br>
Variáveis: Define as coordenadas iniciais do personagem.<br>
ctx.translate: Translada o contexto do canvas pelas coordenadas (xgreg, ygreg). Ou seja, move o ponto de origem (0,0) do sistema de coordenadas para as coordenadas especificadas.<br>
## Trasnform
Esse também utilizamos em rotação e escala que edefine a transformação do contexto para a matriz de identidade. Isso anula qualquer transformação anterior, garantindo que as próximas operações afetem o contexto de forma isolada.<br>
Movimento pelas teclas: Dependendo da tecla pressionada (W, A, S ou D), as variáveis xgreg e ygreg são ajustadas de acordo, movendo o personagem na tela. A velocidade do movimento é controlada pela variável velogreg.
