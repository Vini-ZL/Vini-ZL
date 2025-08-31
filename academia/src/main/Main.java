package main;

import dao.DAO;
import model.*;

public class Main {
    public static void main(String[] args) {
        DAO<Plano> planoDAO = new DAO<>();
        DAO<Cliente> clienteDAO = new DAO<>();
        DAO<Acesso> acessoDAO = new DAO<>();

        // Criar planos
        Plano mensal = new Plano("Mensal", 99.90);
        Plano anual = new Plano("Anual", 899.00);
        planoDAO.salvar(mensal);
        planoDAO.salvar(anual);

        // Criar cliente
        Cliente cli = new Cliente("João Silva", "joao@email.com", "9999-9999", mensal);
        clienteDAO.salvar(cli);

        // Registrar acesso
        Acesso acesso = new Acesso(cli);
        acessoDAO.salvar(acesso);

        System.out.println("Sistema rodou com sucesso!");
    }
}
