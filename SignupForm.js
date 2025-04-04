import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { TextInput, Button, Text, HelperText, RadioButton } from 'react-native-paper';
import { useSignupMutation } from './services/api';

const SignupForm = () => {
  const [signup, { isLoading, error }] = useSignupMutation();
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    gender: 'male',
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const onSignUp = async () => {
    try {
      const response = await signup({
        name: form.name,
        age: parseInt(form.age),
        email: form.email,
        password: form.password,
        gender: form.gender,
      }).unwrap();
      Alert.alert('🎉 Đăng ký thành công!', `Chào mừng ${response.name}`);
    } catch (err) {
      console.error('❌ Lỗi đăng ký:', err);
      Alert.alert('⚠ Đăng ký thất bại', err.data?.message || 'Có lỗi xảy ra!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Ký</Text>
      <TextInput
        label="Họ và Tên"
        value={form.name}
        onChangeText={(text) => handleChange('name', text)}
        mode="outlined"
      />
      <TextInput
        label="Tuổi"
        value={form.age}
        keyboardType="numeric"
        onChangeText={(text) => handleChange('age', text)}
        mode="outlined"
      />
      <TextInput
        label="Email"
        value={form.email}
        keyboardType="email-address"
        onChangeText={(text) => handleChange('email', text)}
        mode="outlined"
      />
      <TextInput
        label="Mật khẩu"
        value={form.password}
        secureTextEntry
        onChangeText={(text) => handleChange('password', text)}
        mode="outlined"
      />
      <Text style={styles.label}>Giới tính</Text>
      <RadioButton.Group
        onValueChange={(value) => handleChange('gender', value)}
        value={form.gender}
      >
        <View style={styles.radioContainer}>
          <RadioButton.Item label="Nam" value="male" />
          <RadioButton.Item label="Nữ" value="female" />
        </View>
      </RadioButton.Group>
      {error && <HelperText type="error">⚠ {error.data?.message || 'Có lỗi xảy ra!'}</HelperText>}
      <Button mode="contained" loading={isLoading} onPress={onSignUp}>
        {isLoading ? 'Đang đăng ký...' : 'Đăng ký'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});

export default SignupForm;
