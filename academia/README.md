# 🏋️‍♂️ Sistema de Controle de Academia (GM FIT)

Um sistema simples em **Java + JPA** para controle de:
- **Clientes** (cadastro e plano contratado)
- **Planos** (mensal, anual, etc.)
- **Acessos** (registro de entrada na academia)

## 🚀 Tecnologias usadas
- Java 17+
- JPA (EclipseLink)
- Banco de dados H2 (memória)
- DAO genérico para persistência

## 📂 Estrutura
- `model/` → entidades JPA (Cliente, Plano, Acesso)
- `dao/` → camada de persistência genérica
- `main/` → classe principal com exemplo de uso
- `persistence.xml` → configuração do JPA

## ▶️ Como rodar
1. Clone este repositório:
   ```bash
   git clone https://github.com/Vini-ZL/academia.git
