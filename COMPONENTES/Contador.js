import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Contador = ({ valor }) => {

  const estiloContador = useMemo(() => [
    styles.contador,
    valor < 0 ? styles.negativo : styles.positivo
  ], [valor]);

  return (
    <View style={styles.contenedor}>
      <View style={styles.marco}>
        <Text style={estiloContador}>{valor}</Text>
      </View>
    </View>
  );
};


Contador.propTypes = {
  valor: PropTypes.number.isRequired,
};


const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marco: {
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 50,
    paddingVertical: 30,
    backgroundColor: 'transparent',
    minWidth: 200,
    shadowColor: '#000',      
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contador: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false,
  },
  positivo: {
    color: '#FFFFFF',
  },
  negativo: {
    color: '#FF6B6B',
  },

});

export default Contador;