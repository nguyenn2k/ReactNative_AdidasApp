/***
 * NguyenTruongKhoiNguyen_Nguyen2k
 * 
 */
import { StyleSheet, Text, View , Image, Modal, TouchableOpacity, Alert} from 'react-native'
import React from 'react'

import {COLORS, images, FONTS, SIZES, icons} from '../constants' 
import { FlatList } from 'react-native-gesture-handler'
import { BlurView } from '@react-native-community/blur'
import { Polygon, Svg } from 'react-native-svg'

const Home = () => {
    const [showAddToBagModal, setShowAddToBagModal] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null)
    const [selectedSize, setSelectedSize] = React.useState("")
    //Data Shose (Trending):
    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "Adidas_Adizero",
            img: images.Adidas_Adizero,
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "1.200.000 VND",
            sizes: [6, 7, 8, 9, 10]
        },
        {
            id: 1,
            name: "Adidas_Crazy1",
            img: images.Adidas_Crazy1,
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "1.500.000 VND",
            sizes: [6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            name: "Adidas_Galaxy6",
            img: images.Adidas_Galaxy6,
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "2.500.000 VND",
            sizes: [6, 7, 8, 9]
        },
    ])
    //Data Shose (Recent):
    const [recentlyViewed, setRecentlyViewed] = React.useState([
        {
            id: 0,
            name: "Adidas_NMDR1",
            img: images.Adidas_NMDR1,
            bgColor: "#414045",
            type: "TRAINING",
            price: "3.000.000 VND",
            sizes: [6, 7, 8]
        },
        {
            id: 1,
            name: "Adidas_RunFalcon3",
            img: images.Adidas_RunFalcon3,
            bgColor: "#4EABA6",
            type: "TRAINING",
            price: "6.500.000 VND",
            sizes: [6, 7, 8, 9, 10, 11]
        },
        {
            id: 2,
            name: "Adidas_SuperNova",
            img: images.Adidas_SuperNova,
            bgColor: "#2B4660",
            type: "TRAINING",
            price: "5.000.000 VND",
            sizes: [6, 7, 8, 9]
        },
        {
            id: 3,
            name: "Adidas_SuperStar",
            img: images.Adidas_SuperStar,
            bgColor: "#A69285",
            type: "TRAINING",
            price: "$1.890.000",
            sizes: [6, 7, 8, 9, 10, 11, 12, 13]
        },
        {
            id: 4,
            name: "Adidas_Ultra_4DFWD",
            img: images.Adidas_Ultra_4DFWD,
            bgColor: "#A02E41",
            type: "TRAINING",
            price: "2.650.000",
            sizes: [6, 7, 8, 9, 10, 11]
        },
    ]);

    // Render

    function renderTrendingShoes(item, index) {
        var trendingStyle = {};

        if (index == 0) {
            trendingStyle = { marginLeft: SIZES.padding, }
        } else {
            trendingStyle = {}
        }

        return (
            <TouchableOpacity
                style={{ height: 240, width: 180, justifyContent: 'center', marginHorizontal: SIZES.base, ...trendingStyle }}
                onPress={() => {
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                }}
            >
                <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>

                <View style={[{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginTop: SIZES.base,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    marginRight: SIZES.padding,
                    paddingLeft: SIZES.radius,
                    paddingRight: SIZES.padding,
                    paddingBottom: SIZES.radius,
                    backgroundColor: item.bgColor
                }, styles.trendingShadow]}>
                    <View style={{ height: '35%', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.price}</Text>
                    </View>
                </View>

                <View style={{ position: 'absolute', top: 27, right: 0, width: "95%", height: "100%" }}>
                    <Svg height="100%" width="100%">
                        <Polygon
                            points="0,0 160,0 160,80"
                            fill="white"
                        />
                    </Svg>
                </View>

                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 50,
                        right: 0,
                        width: "98%",
                        height: 80,
                        transform: [
                            { rotate: '-15deg' }
                        ]
                    }}
                />
            </TouchableOpacity>
        )
    }

    function renderRecentlyViewed(item, index) {
        return (
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row' }}
                onPress={() => {
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                }}
            >
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={item.img}
                        resizeMode="contain"
                        style={{
                            width: 130,
                            height: 100,
                        }}
                    />
                </View>
                <View style={{ flex: 1.5, marginLeft: SIZES.radius, justifyContent: "center" }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.name}</Text>
                    <Text style={{ ...FONTS.h3 }}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    function renderShoeSizes() {
        return (
            selectedItem.sizes.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={{
                            width: 35,
                            height: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: 5,
                            marginBottom: 10,
                            backgroundColor: selectedItem.sizes[index] == selectedSize ? COLORS.white : null,
                            borderWidth: 1,
                            borderColor: COLORS.white,
                            borderRadius: 5,
                        }}
                        onPress={() => {
                            setSelectedSize(item)
                        }}
                    >
                        <Text style={{ color: selectedItem.sizes[index] == selectedSize ? COLORS.black : COLORS.white, ...FONTS.body4 }}>{item}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.largeTitleBold }}>TRENDING</Text>

            <View style={{ height: 260, marginTop: SIZES.radius }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={trending}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderTrendingShoes(item, index)}
                />
            </View>

            <View
                style={[{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: COLORS.white
                }, styles.recentContainerShadow]}
            >
                <View style={{ width: 70, marginLeft: SIZES.base }}>
                    <Image
                        source={images.recentlyViewedLabel}
                        resizeMode="contain"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </View>
                <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recentlyViewed}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
                    />
                </View>
            </View>

            {selectedItem &&
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showAddToBagModal}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <BlurView
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        blurType="light"
                        blurAmount={20}
                        reducedTransparencyFallbackColor="white"
                    >
                        {/* Button to close modal */}
                        <TouchableOpacity
                            style={styles.absolute}
                            onPress={() => {
                                setSelectedItem(null)
                                setSelectedSize("")
                                setShowAddToBagModal(false)
                            }}
                        >
                        </TouchableOpacity>

                        {/* Modal content */}
                        <View style={{ justifyContent: 'center', width: "85%", backgroundColor: selectedItem.bgColor }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -SIZES.padding * 2 }}>
                                <Image
                                    source={selectedItem.img}
                                    resizeMode="contain"
                                    style={{
                                        width: "90%",
                                        height: 170,
                                        transform: [
                                            { rotate: '-15deg' }
                                        ]
                                    }}
                                />
                            </View>
                            <Text style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body2 }}>{selectedItem.name}</Text>
                            <Text style={{ marginTop: SIZES.base / 2, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body3 }}>{selectedItem.type}</Text>
                            <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.h1 }}>{selectedItem.price}</Text>
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                                <View>
                                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Select size</Text>
                                </View>
                                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', marginLeft: SIZES.radius }}>
                                    {renderShoeSizes()}
                                </View>
                            </View>

                            <TouchableOpacity
                                style={{ width: '100%', height: 70, marginTop: SIZES.base, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                                onPress={() => {
                                    setSelectedItem(null)
                                    setSelectedSize("")
                                    setShowAddToBagModal(false)
                                }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>Add to Bag</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </Modal>
            }
        </View>
    )
}

//StyleSheet:
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    trendingShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    recentContainerShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
})

export default Home;