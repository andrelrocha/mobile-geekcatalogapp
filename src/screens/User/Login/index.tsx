import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useState } from 'react';
import React from 'react';

import { loginUser } from '../../../services/user/login';
import { UserLogin } from '../../../types/userLoginDTO';
import { styles } from '../styles';


class Login extends React.Component {

  render() {
    const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const userData: UserLogin = {
      login,
      password
    };
    loginUser(userData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça seu login</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu login"
        value={login}
        onChangeText={setLogin}
        autoFocus
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.smallButtonGreen}>
          <Text style={styles.smallButtonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallButtonRed}>
          <Text style={styles.smallButtonText}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }
}

export default Login;