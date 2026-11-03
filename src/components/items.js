import { Pressable, Text, StyleSheet } from "react-native"

const Item = ({ item, onDelete }) => {
    return (
        <Pressable
            style={item.done ? styles.taskContainerTrue : styles.taskContainer}
            onPress={() => onDelete(item.id)}
        >
            <Text>{item.title}</Text>
        </Pressable>
    )
}

export default Item;

const styles = StyleSheet.create({
    taskContainer: {
        flex: 4,
        padding: 5,
        backgroundColor: '#0c75ec',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,
    },

    taskContainerTrue: {
        flex: 4,
        padding: 5,
        backgroundColor: '#0cec75',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,
    },
})