import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiply, reset } from "./counterSlice";

const Dem = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter App</Text>
            <Text style={styles.counterText}>Dem: {count}</Text>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.increase]}
                    onPress={() => dispatch(increment())}
                >
                    <Text style={styles.buttonText}>Tăng</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.decrease]}
                    onPress={() => dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>Giảm</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.multiply]}
                    onPress={() => dispatch(multiply())}
                >
                    <Text style={styles.buttonText}>Bình Phương</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.reset]}
                    onPress={() => dispatch(reset())}
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    counterText: {
        fontSize: 32,
        fontWeight: '600',
        color: '#333',
        marginBottom: 30,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        width: '50%',
        paddingVertical: 12,
        marginVertical: 8,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
    },
    increase: {
        backgroundColor: '#4CAF50',
    },
    decrease: {
        backgroundColor: '#f44336',
    },
    multiply: {
        backgroundColor: '#2196F3',
    },
    reset: {
        backgroundColor: '#9E9E9E',
    },
});

export default Dem;
