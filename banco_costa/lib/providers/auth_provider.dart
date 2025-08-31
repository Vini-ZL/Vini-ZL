import 'package:flutter/material.dart';
import '../models/user_model.dart';

class AuthData extends ChangeNotifier {
  List<User> _users = [];
  User? _loggedUser;

  List<User> get users => _users;
  User? get loggedUser => _loggedUser;

  void register(User user) {
    _users.add(user);
    notifyListeners();
  }

  bool login(String cpfCnpj, String password) {
    final user = _users.firstWhere(
      (u) => u.cpfCnpj == cpfCnpj && u.password == password,
      orElse: () => User(cpfCnpj: '', password: '', fullName: ''),
    );

    if (user.cpfCnpj != '') {
      _loggedUser = user;
      notifyListeners();
      return true;
    }
    return false;
  }

  void logout() {
    _loggedUser = null;
    notifyListeners();
  }
}
