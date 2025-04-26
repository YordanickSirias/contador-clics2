import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Contador({ valor }) {
  const estiloContador = [
    styles.contador,
    valor < 0 ? styles.negativo : styles.positivo
  ];

  return (
    <View style={styles.contenedor}>
      <View style={styles.marco}>
        <Text style={estiloContador}>{valor}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marco: {
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 5, // Menos redondeado para aspecto más cuadrado
    paddingHorizontal: 50, // Más ancho
    paddingVertical: 30, // Más alto
    backgroundColor: 'transparent',
    minWidth: 200, // Ancho mínimo garantizado
  },
  contador: {
    fontSize: 100, // Tamaño aumentado
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false, // Para mejor alineación
  },
  etiqueta: {
    fontSize: 24, // Tamaño aumentado
    color: '#FFFFFF',
    marginTop: 20,
    fontWeight: '500',
  },
  positivo: {
    color: '#FFFFFF',
  },
  negativo: {
    color: '#FF6B6B',
    fontSize: 100, // Mantiene tamaño consistente
  },
});