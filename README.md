# CaixaEletrônico

Este projeto é uma melhoria em um código base de um caixa eletrônico virtual. As melhorias foram feitas de acordo com as solicitações recebidas.

## Melhorias Implementadas:

- **Saudação Personalizada**: Ao acessar o sistema, o nome do usuário é solicitado e uma mensagem de boas-vindas personalizada é exibida.

- **Validação de Opções**: Na função "início", foi implementada a estrutura de controle switch/case para validar a opção escolhida pelo usuário.

- **Verificação de Saldo**: Antes de realizar um saque, o sistema verifica se o saldo é suficiente. Se o valor do saque for maior que o saldo disponível ou menor ou igual a zero, a operação é cancelada e uma mensagem de "Operação não autorizada" é exibida.

- **Extrato**: Foi adicionada a opção para visualizar o extrato, que inclui algumas transações fictícias.

- **Transferência**: Foi adicionada a opção para realizar transferências. O usuário deve informar o número da conta para a qual deseja transferir e o valor da transferência. O valor é então debitado do saldo da mesma forma que no saque. Se o valor da transferência for maior que o saldo disponível ou menor ou igual a zero, a operação é cancelada e uma mensagem de "Operação não autorizada" é exibida.

- **Menu Principal**: As opções do menu principal foram reordenadas para: Saldo, Extrato, Saque, Depósito, Transferência e Sair.

- **Função de Erro**: A função "erro" foi atualizada para lidar com as novas opções do menu.

- **Depósito**: Se o valor do depósito for menor ou igual a zero, a operação é cancelada e uma mensagem de "Operação não autorizada" é exibida.

- **Senha**: Para acessar o saldo, sacar, retirar o extrato ou transferir dinheiro, o usuário deve informar uma senha. A senha é validada através de uma condicional. A senha correta é 3589. Se a senha informada não for a correta, a função atual é chamada novamente.

- **Sair**: Quando o usuário escolhe sair do sistema, uma mensagem de agradecimento é exibida: "{Nome}, foi um prazer ter você por aqui!".
