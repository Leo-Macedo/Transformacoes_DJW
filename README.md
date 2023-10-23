# Atividade de tranformações no canvas
# Feito por: Leonardo Macêdo e Miguel Oliveira
# Descrição
Essa é uma ativade que vamos implementar as funções: Traslação, Rotação, Escala, Trasnform, Clipping Path e Colisão no canvas JavaScript.
# Greg
<img src="img/greg.jpg"><br>
O Greg nós fizemos utilizando: linhas, quadrados, curvas e círculos.<br>
## Código do Greg

https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/5f7c70f2-b08b-4472-9a91-a9d063683106

<br>
# Paisagem
A paisagem nós fizemos utilizando: curvas e círculos. Fizemos nuvens, pedras e o chão.<br>
<img src="img/paisagem.jpg"><br>
## Código da paisagem

https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/43d3c0b5-d0d3-4f47-9913-5585ba46b02a

# Translação
<img src="img/trans.jpg"><br>
### Variáveis
Define as coordenadas iniciais do personagem.<br>
### ctx.translate
Translada o contexto do canvas pelas coordenadas (xgreg, ygreg). Ou seja, move o ponto de origem (0,0) do sistema de coordenadas para as coordenadas especificadas.A função translate aceita dois parâmetros: tx e ty, que representam as coordenadas x e y para as quais o ponto de origem do sistema de coordenadas deve ser movido. Quando você chama context.translate(tx, ty), todos os desenhos subsequentes no contexto do canvas serão deslocados de tx pixels horizontalmente e ty pixels verticalmente.<br>
### Movimento pelas teclas
Dependendo da tecla pressionada (W, A, S ou D), as variáveis xgreg e ygreg são ajustadas de acordo, movendo o personagem na tela. A velocidade do movimento é controlada pela variável velogreg.
## Trasnform
Esse também utilizamos em rotação e escala que edefine a transformação do contexto para a matriz de identidade. Isso anula qualquer transformação anterior, garantindo que as próximas operações afetem o contexto de forma isolada.<br>
# Translação funcionando

https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/cae0e463-439d-4fbf-a9c7-b80cb3193c3a

<br>
# Rotação
< img src="img/rota.jpg"/><br>
### Variáveis
Esta variável será usada para armazenar o ângulo de rotação.<br>
### ctx.rotate
Este método rotaciona o sistema de coordenadas do contexto em um ângulo especificado, em torno do próprio eixo. O ângulo é fornecido em radianos, não em graus. Para converter graus em radianos, você pode usar a fórmula radianos = graus * Math.PI / 180. Se o ângulo está positivo, irá rotacionar no sentido horário, se está negatico, irá rotacionar no sentido anti-horário.<br>
### Movimento pelas teclas
Quando a tecla pressionada é a barra de espaço (' '), o valor de rgreg é incrementado em 10. E quando incrementa 10 o Greg rotaciona em torno do próprio eixo 10 graus no sentido horário pois está positivo.<br>
# Rotação funcionando

https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/9f3213a2-e449-43cd-bc5d-e03ad9bd043d

<br>
# Escala
