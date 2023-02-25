import React, { useState } from "react";
import {Button, TextInput, View} from 'react-native';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <TextInput
        style={{
          flex:1
        }}
        placeholder="Email"
        onChangeText={newEmail => setEmail(newEmail)}
        defaultValue={email}
      />
      <TextInput
        style={{
          flex:1
        }}
        placeholder="Password"
        onChangeText={newPwd => setPassword(newPwd)}
        defaultValue={password}
      />
      <Button
        title="LOGIN"
        onPress={e => handleSubmit(e)}
      />

    </View>
  );

}
export default Login