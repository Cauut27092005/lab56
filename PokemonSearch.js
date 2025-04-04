import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { useLazyGetPokemonByNameQuery } from './services/api';

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [getPokemon, { data, error, isLoading }] = useLazyGetPokemonByNameQuery();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>🔍 Tìm kiếm Pokemon</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
        placeholder="Nhập tên Pokemon"
        value={pokemonName}
        onChangeText={setPokemonName}
      />
      <Button title="Tìm kiếm" onPress={() => getPokemon(pokemonName.toLowerCase())} />
      {isLoading && <Text>⏳ Đang tải...</Text>}
      {error && <Text>⚠ Lỗi khi tải dữ liệu</Text>}
      {data && (
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 18 }}>{data.name}</Text>
          <Image source={{ uri: data.sprites.front_default }} style={{ width: 100, height: 100 }} />
        </View>
      )}
    </View>
  );
};

export default PokemonSearch;
