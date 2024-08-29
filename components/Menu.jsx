import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu as MenuPaper, Button, Provider as PaperProvider } from 'react-native-paper';

export default function Menu({ titles }) {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <PaperProvider>
            <View style={styles.view}>
                <MenuPaper
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>Show menu</Button>}
                >
                    {titles.map((title, index) => (
                        <MenuPaper.Item
                            key={index}
                            onPress={() => {
                                closeMenu();
                            }}
                        >
                            {title}
                        </MenuPaper.Item>
                    ))}
                </MenuPaper>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

