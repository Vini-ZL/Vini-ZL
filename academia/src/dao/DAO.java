package dao;

import jakarta.persistence.*;
import java.util.List;

public class DAO<T> {
    private static EntityManagerFactory emf = Persistence.createEntityManagerFactory("academiaPU");
    private EntityManager em;

    public DAO() {
        em = emf.createEntityManager();
    }

    public void salvar(T obj) {
        em.getTransaction().begin();
        em.persist(obj);
        em.getTransaction().commit();
    }

    public T buscar(Class<T> clazz, int id) {
        return em.find(clazz, id);
    }

    public List<T> listar(Class<T> clazz) {
        return em.createQuery("from " + clazz.getSimpleName(), clazz).getResultList();
    }

    public void fechar() {
        em.close();
    }
}
