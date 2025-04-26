import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Boton = ({ onPress, texto, estilo }) => (
  <TouchableOpacity onPress={onPress} style={[styles.boton, estilo]}>
    <Text style={styles.textoBoton}>{texto}</Text>
  </TouchableOpacity>
);

const Botones = React.memo(({ onIncrementar, onReiniciar, onDisminuir }) => (
  <View style={styles.contenedor}>
    <Boton 
      onPress={onIncrementar} 
      texto="Incrementar" 
      estilo={styles.botonIncrementar} 
    />
    <Boton 
      onPress={onReiniciar} 
      texto="Reiniciar" 
      estilo={styles.botonReiniciar} 
    />
    <Boton 
      onPress={onDisminuir} 
      texto="Disminuir" 
      estilo={styles.botonDisminuir} 
    />
  </View>
));

Botones.propTypes = {
  onIncrementar: PropTypes.func.isRequired,
  onReiniciar: PropTypes.func.isRequired,
  onDisminuir: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: -20,
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '80%',
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  botonIncrementar: {
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: 'white',
  },
  botonReiniciar: {
    backgroundColor: '#2196F3',
    borderWidth: 2,
    borderColor: 'white',
  },
  botonDisminuir: {
    backgroundColor: '#F44336',
    borderWidth: 2,
    borderColor: 'white',
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default Botones;