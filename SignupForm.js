import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
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
          age: parseInt(form.age), // Đảm bảo age là số
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
      <View style={{ padding: 20 }}>
        <Text>Họ và Tên:</Text>
        <TextInput
          placeholder="Nhập tên"
          value={form.name}
          onChangeText={(text) => handleChange('name', text)}
        />
  
        <Text>Tuổi:</Text>
        <TextInput
          placeholder="Nhập tuổi"
          value={form.age}
          keyboardType="numeric"
          onChangeText={(text) => handleChange('age', text)}
        />
  
        <Text>Email:</Text>
        <TextInput
          placeholder="Nhập email"
          value={form.email}
          keyboardType="email-address"
          onChangeText={(text) => handleChange('email', text)}
        />
  
        <Text>Mật khẩu:</Text>
        <TextInput
          placeholder="Nhập mật khẩu"
          value={form.password}
          secureTextEntry
          onChangeText={(text) => handleChange('password', text)}
        />
  
        <Button title={isLoading ? "Đang đăng ký..." : "Đăng ký"} onPress={onSignUp} />
  
        {error && <Text style={{ color: 'red' }}>⚠ {error.data?.message || 'Có lỗi xảy ra!'}</Text>}
      </View>
    );
  };
  

export default SignupForm;
