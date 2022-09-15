import { StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList, Image } from 'react-native'
import React from 'react'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Props = {}

const HomeList = (props: Props) => {


    const [listData, setListData] = React.useState([]);
    const [isCheck, setIsCheck] = React.useState(-1);


    function getListData() {
        fetch("https://random-data-api.com/api/users/random_user?size=10")
            .then(res => {
                return res.json();
            })
            .then(resJson => {

                setListData(resJson)

            })
    }
    React.useEffect(() => {

        getListData();

        return (() => {
            setListData([]);
        })
    }, [])


    function eVenClick(index: any) {
        setIsCheck(index);
    }

    function FetchRD() {
        getListData();
    }

    const renderItem = ({ item, index }: any) => {
        return (
            <>

                {
                    isCheck !== index ? <TouchableOpacity onPress={() => eVenClick(index)} >
                        <View
                            style={[styles.mStyleItem,
                            {
                                marginLeft: index % 2 == 0 ? 10 : 0,
                                marginRight: 10,
                            }
                            ]}
                        >
                            <Image
                                style={[styles.mStyleImg,]}
                                source={{ uri: item?.avatar }}
                                resizeMode="contain"
                            />
                            <Text style={styles.mTextFs}>
                                {item?.first_name}
                            </Text>
                            <Text style={styles.mTextLs}>
                                {item?.last_name}
                            </Text>
                        </View>

                    </TouchableOpacity>
                        : <TouchableOpacity onPress={() => eVenClick(isCheck !== index ? index : -1)}>
                            <View
                                style={[styles.mStyleItem,
                                {
                                    marginLeft: index % 2 == 0 ? 10 : 0,
                                    marginRight: 10,
                                }
                                ]}
                            >
                                <Text
                                    style={styles.mTextLss}>
                                    ID :
                                    {item?.id}
                                </Text>
                                <Text style={styles.mTextLss}>
                                    UID :
                                    {item?.uid}
                                </Text>
                                <Text style={styles.mTextLss}>
                                    Password :
                                    {item?.password}
                                </Text>
                                <Text style={styles.mTextLss}>
                                    UserName :
                                    {item?.username}
                                </Text>
                                <Text style={styles.mTextLss}>
                                    Email :
                                    {item?.email}
                                </Text>
                                <Text style={styles.mTextLss}>
                                    Gender :
                                    {item?.gender}
                                </Text>
                                <Text style={styles.mTextLss}>
                                    Phone Number :
                                    {item?.phone_number}
                                </Text>
                                <Text style={styles.mTextLss}>
                                    Social :
                                    {item?.social_insurance_number}
                                </Text>
                                <Text style={styles.mTextLss}>
                                    Date Of Birth :
                                    {item?.date_of_birth}
                                </Text>
                            </View>
                        </TouchableOpacity>

                }

            </>

            // <View>

            // </View>
        )
    }
    return (
        <View style={styles.mContainer}>
            <TouchableOpacity
                onPress={FetchRD}
                style={styles.mStyleBtn}>
                <Text style={styles.mText}>Fetch Random</Text>
            </TouchableOpacity>

            <View>
                <FlatList
                    style={styles.mStyleFl}
                    data={listData}
                    renderItem={renderItem}
                    listKey="Home_List"
                    keyboardDismissMode='on-drag'
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={styles.mView}></View>}
                />
            </View>

        </View>
    )
}

export default HomeList

const styles = StyleSheet.create({

    mContainer: {
        flex: 1,
        backgroundColor: "#66FF99"

    },
    mStyleBtn: {
        width: windowWidth - 20,
        height: 48,
        borderWidth: 1,
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#FF0000",
        borderColor: "#FF0000",
        borderRadius: 10
    },
    mText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center"
    },
    mStyleImg: {
        width: windowWidth / 2 - 20,
        height: windowWidth / 4
    },
    mStyleItem: {
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#fff",
        borderRadius: 10,
        flex: 1,

    },
    mView: {
        height: 10
    }
    , mTextFs: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        textColor: "#000"
    },
    mTextLs: {
        fontSize: 18,
        textAlign: "center",
        textColor: "#000"
    },
    mTextLss: {
        fontSize: 12,
        textColor: "#000",
        width: windowWidth / 2 - 20,

    },
    mStyleFl: {
        marginBottom: 72
    }
})