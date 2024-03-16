import { FlatList, StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import VideoPost from "@/components/day12/VideoPost";
import { useCallback, useEffect, useRef, useState } from "react";

const dummyPosts = [
  {
    id: "1",
    video:
      "https://firebasestorage.googleapis.com/v0/b/fir-videosapp-f521e.appspot.com/o/MyReels%2Freel1710006592539?alt=media&token=641fc3c2-0b6e-41f8-a24d-4fb7c859e551",
    caption: "Caption of the post",
  },
  {
    id: "2",
    video:
      "https://firebasestorage.googleapis.com/v0/b/fir-videosapp-f521e.appspot.com/o/Why%20%F0%9F%92%94%2Freel1710158517096?alt=media&token=90632213-c298-4c37-b757-516eead69b57",
    caption: "Caption of the post",
  },
  {
    id: "3",
    video:
      "https://firebasestorage.googleapis.com/v0/b/fir-videosapp-f521e.appspot.com/o/MyReels%2Freel1710007205041?alt=media&token=ffc41fe6-b5ae-404d-a9b6-5a4f308b4cfe",
    caption: "Caption of the post",
  },
  
 
  {
    id: "4",
    video:
      "https://firebasestorage.googleapis.com/v0/b/fir-videosapp-f521e.appspot.com/o/MyReels%2Freel1710007762005?alt=media&token=ce7bb713-0c60-40e1-a38c-ae48ccf76ee7",
    caption: "Caption of the post",
  },
  {
    id: "5",
    video:
      "https://firebasestorage.googleapis.com/v0/b/fir-videosapp-f521e.appspot.com/o/MyReels%2Freel1710010720311?alt=media&token=a17bfe68-ace0-48ff-a31c-a6b57e66c975",
    caption: "Caption of the post",
  },
];

const FeedScreen = () => {
  const [activePostId,setActivePostId] = useState(dummyPosts[0].id);
  const [posts,setPosts] = useState<typeof dummyPosts>([]);

  useEffect(() =>{
    const fetchPosts = async () =>{
      setPosts(dummyPosts);
    }
    fetchPosts();
  },[])
  
  // const onViewableItemChange = useCallback(({changed,viewableItems}) => {
  //   // console.log(changed);
  //   // console.log(viewableItems);
  //   if(viewableItems.length > 0 && viewableItems[0].isViewable){
  //     setActivePostId(viewableItems[0].item.id);
  //   }

  // },[]);

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: { itemVisiblePercentThreshold: 50 },
      onViewableItemsChanged: ({ changed, viewableItems }) => {
        if (viewableItems.length > 0 && viewableItems[0].isViewable) {
          setActivePostId(viewableItems[0].item.id);
        }
      },
    },
  ]);

  const onEndReached = () => {
    // fetch more posts from database
    setPosts((currentPosts) => [...currentPosts, ...dummyPosts]);
    // console.warn('End Reached')
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      {/* <VideoPost post={posts[0]} /> */}
      <FlatList 
        data={posts}
        renderItem={({item}) => <VideoPost post={item} activePostId={activePostId} />}
        keyExtractor={(item,index) => `${item.id}-${index}`}
        pagingEnabled
        showsVerticalScrollIndicator={false}
       
        viewabilityConfigCallbackPairs= {viewabilityConfigCallbackPairs.current}
        // onEndReached={onEndReached}
        // onEndReachedThreshold={3}
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
