# Obeservação
Adicionei os vídeos que bugaram ao passar o repositório de público para privado.<br>
# Atividade de tranformações no canvas
# Feito por: Leonardo Macêdo e Miguel Oliveira
# Descrição
Essa é uma ativade que vamos implementar as funções: Traslação, Rotação, Escala, Trasnform, Clipping Path e Colisão no canvas JavaScript.
# Greg
<img src="img/greg.jpg"><br>
O Greg nós fizemos utilizando: linhas, quadrados, curvas e círculos.<br>
## Código do Greg


https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/f1fcadc7-7191-4925-b275-5f0f0c0e2ee9


<br>

# Paisagem
A paisagem nós fizemos utilizando: curvas e círculos. Fizemos nuvens, pedras e o chão.<br>
<img src="img/paisagem.jpg"><br>

## Código da paisagem


https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/4f1be9bc-9811-43cc-92aa-f7b6e0732165


# Translação
<img src="img/trans.jpg"><br>
### Variáveis
Define as coordenadas iniciais do personagem.<br>
### ctx.translate
Translada o contexto do canvas pelas coordenadas (xgreg, ygreg). Ou seja, move o ponto de origem (0,0) do sistema de coordenadas para as coordenadas especificadas.A função translate aceita dois parâmetros: tx e ty, que representam as coordenadas x e y para as quais o ponto de origem do sistema de coordenadas deve ser movido. Quando você chama context.translate(tx, ty), todos os desenhos subsequentes no contexto do canvas serão deslocados de tx pixels horizontalmente e ty pixels verticalmente.<br>
### Movimento pelas teclas
Dependendo da tecla pressionada (W, A, S ou D), as variáveis xgreg e ygreg são ajustadas de acordo, movendo o personagem na tela. A velocidade do movimento é controlada pela variável velogreg.
## Transform
Esse também utilizamos em rotação e escala que define a transformação do contexto para a matriz de identidade. Isso anula qualquer transformação anterior, garantindo que as próximas operações afetem o contexto de forma isolada.<br>
# Translação funcionando


https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/7294efb8-5ea3-44ca-a456-075bc1c064ff


<br>

# Rotação
<img src="img/rota.jpg"><br>

### Variáveis
Esta variável será usada para armazenar o ângulo de rotação.<br>

### ctx.rotate
Este método rotaciona o sistema de coordenadas do contexto em um ângulo especificado, em torno do próprio eixo. O ângulo é fornecido em radianos, não em graus. Para converter graus em radianos, você pode usar a fórmula radianos = graus * Math.PI / 180. Se o ângulo está positivo, irá rotacionar no sentido horário, se está negatico, irá rotacionar no sentido anti-horário.<br>

### Movimento pelas teclas
Quando a tecla pressionada é a barra de espaço (' '), o valor de rgreg é incrementado em 10. E quando incrementa 10 o Greg rotaciona em torno do próprio eixo 10 graus no sentido horário pois está positivo.<br>

# Rotação funcionando


https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/9b4b86e0-1094-4c41-a234-458447784bd9


<br>

# Escala
<img src="img/esca.jpg"><br>

### Variáveis
Uma variável chamada sgreg é declarada e inicializada com o valor 0.2. Que é o tamanho em x e y original do Greg.<br>

### ctx.scale
Essa função escala o contexto atual. Se você escalar um contexto, todos os desenhos futuros serão escalados. Os parâmetros utilizados são: 1=100%, 0.5=50%, 2=200%. Nesse caso Greg começa com 0.2=20% do seu tamanho.<br>

### Movimento pelas teclas
Se a tecla pressionada for '1', sgreg é incrementado por 0.01 e aumenta 1% seu tamanho.<br>
Se a tecla pressionada for '2', sgreg é decrementado por 0.01 e diminui 1% seu tamanho.<br>

# Escala funcionando


https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/6bd6537e-e971-444d-9705-7119995fd462


<br>

# Colisão
<img src="img/coli.jpg"><br>
### Explicação
Na borda da direita se a posição x do Greg for maior que 897 ela será igual a 897 e ele "baterá" na borda.<br>
Na borda de baixo se a posição y do Greg for maior que 313 ela será igual a 313 e ele "baterá" na borda.<br>
Na borda de cima se a posição y do Greg for menor que -13 ela será igual a -13 e ele "baterá" na borda.<br>
Na borda da esquerda se a posição x do Greg for menor que -33 ela será igual a -33 e ele "baterá" na borda.<br>

# Colisão funcionando


https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/eb5caa22-29f0-4450-8d33-063c832f215a


<br>

# Clipping Path
<img src="img/clip.jpg"><br>

### Explicação
Esse código desenha um círculo com centro nas coordenadas (xgreg, ygreg) para mover junto com o Greg e um raio de 200. Em seguida, definimos uma área de recorte com base nesse círculo, e qualquer coisa fora desse círculo não será desenhada. O ctx.save() salva o estado atual do contexto gráfico ctx. O ctx.restore() garante que o estado do contexto seja restaurado para o que era antes dessas operações, o que pode ser útil se você quiser continuar desenhando fora dessa área de recorte. <br>
A função Clipping Path permite que você crie uma região de recorte que define qual parte de um elemento deve ser mostrada. As partes que estão dentro da região são mostradas, enquanto as que estão fora são ocultadas. <br>

# Clipping Path funcionando


https://github.com/Leo-Macedo/Transformacoes_DJW/assets/127630556/8b6dc101-5e5d-4090-9c94-157cc040cfa0


<br>
# ClearRect
<img src="img/clear.jpg"><br>

### Explicação
Ele cria um retângulo de 1000 de largura por 500 de altura que limpa toda a tela quando alguma das teclas: 1, 2, espaço, w, a, s e d são acionadas. Isso serve para não repetir os desenhos quando movimenta-lós.<br>


# Diagrama de Classes
<img src="img/diagrama.png"><br>
# Como usar o Git Bash
<img src="img/git1.jpg"><br>

# Código Git Bash
<img src="img/git.jpg">
