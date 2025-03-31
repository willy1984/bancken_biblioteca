package com.biblioteca.poli.entities;

public class HU_Vencimiento {
    package NotificationSystem;

import java.time.LocalDate;

    public class Loan {
        private String bookTitle;
        private LocalDate dueDate;
        private String userName;

        public Loan(String bookTitle, LocalDate dueDate, String userName) {
            this.bookTitle = bookTitle;
            this.dueDate = dueDate;
            this.userName = userName;
        }

        public String getBookTitle() {
            return bookTitle;
        }

        public LocalDate getDueDate() {
            return dueDate;
        }

        public String getUserName() {
            return userName;
        }
    }
package com.example.library.services;

import com.example.library.models.Loan;
import com.example.library.models.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

    @Service
    public class LoanService {
        private List<Loan> loans = new ArrayList<>();
        private List<User> users = new ArrayList<>();

        public LoanService() {
            // Simulación de datos
            users.add(new User(1, "David"));
            users.add(new User(2, "Carlos"));

            loans.add(new Loan(1, "Java Programming", LocalDate.now().plusDays(3), 1));
            loans.add(new Loan(2, "Spring Boot Guide", LocalDate.now().plusDays(2), 2));
        }

        public List<Loan> getLoans() {
            return loans;
        }

        public List<User> getUsers() {
            return users;
        }
    }

}
