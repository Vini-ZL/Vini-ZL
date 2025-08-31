package model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Acesso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Cliente cliente;

    private LocalDateTime dataHora;

    public Acesso() {}

    public Acesso(Cliente cliente) {
        this.cliente = cliente;
        this.dataHora = LocalDateTime.now();
    }

    // Getters e Setters
    public int getId() { return id; }
    public Cliente getCliente() { return cliente; }
    public void setCliente(Cliente cliente) { this.cliente = cliente; }
    public LocalDateTime getDataHora() { return dataHora; }
    public void setDataHora(LocalDateTime dataHora) { this.dataHora = dataHora; }
}
