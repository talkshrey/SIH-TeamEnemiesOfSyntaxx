import React, {useState} from 'react';
import {
  Text,
  View,
  Linking,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import axios from 'axios';

const Link = (props) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(props.url)}>
      <Text style={styles.link}> {props.text} </Text>
    </TouchableOpacity>
  );
};

const Founders = () => {
  const [contributors, setContributors] = useState([{}]);
  const [mobileContributors, setMobileContributors] = useState([{}]);

  const getFounders = async () => {
    const response = await axios.get(
      'https://findmentor.network/activeMentorships.json',
    );
    setContributors(response.data.mentorships[0].contributors);
    setMobileContributors(response.data.mentorships[9].contributors); //burası düzenlenecek.
  };

  getFounders();

  let avatars = [];
  contributors.forEach((c) => {
    avatars.push(c.avatar);
  });
  mobileContributors.forEach((c) => {
    avatars.push(c.avatar);
  });
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => Linking.openURL(item.github_address)}>
      <Image
        style={{
          height: 30,
          width: 30,
          borderRadius: 30,
          opacity: 0.8,
          margin: 4,
        }}
        source={{
          uri: item.avatar,
        }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={contributors}
        renderItem={renderItem}
        keyExtractor={(item) => item.username}
        numColumns={8}
        style={{margin: 5}}
      />

      <Text style={styles.boxHeader}>Mobile App Founders</Text>
      <FlatList
        data={mobileContributors}
        renderItem={renderItem}
        keyExtractor={(item) => item.username}
        numColumns={8}
        style={{margin: 5}}
      />
    </View>
  );
};

const HowItWorks = (props) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{flex: 1}}>
        <View>
          <View style={styles.box}>
            <Text style={styles.boxHeader}>Founders</Text>
            <Text>
              As contributors are the actual founders of this collaborative
              artwork.
            </Text>
            <Founders />
          </View>
          <View style={styles.box}>
            <View>
              <Text style={styles.boxHeader}>
                How To Be A 🌟GREAT🌟 Mentee?
              </Text>
              <Text>
                There is ONE type of mentee that exists. Active one. At least we
                experienced it in that way. Let me know if there exists another
                approach.
              </Text>
              <Text style={styles.listHeader}>Be sure about:</Text>
              <View style={styles.listContent}>
                <Text>
                  1. Have a descriptive
                  <Link
                    text="GitHub profile readme"
                    url="https://github.com/abhisheknaiidu/awesome-github-profile-readme"
                  />
                </Text>
                <Text>2. Have a descriptive LinkedIn profile.</Text>
                <Text>
                  3. Join the{' '}
                  <Link
                    text="Discord Server"
                    url="https://discord.com/invite/nkbmBSW8CM"
                  />
                  .
                </Text>
              </View>

              <Text style={styles.listHeader}>Then:</Text>
              <View style={styles.listContent}>
                <Text>1. First, what you want to learn, decide.</Text>
                <Text>
                  2. You should visit active
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('ActiveMentorships')
                    }>
                    <Text style={styles.link}> mentorships page</Text>
                  </TouchableOpacity>
                  .You don't want to miss a mentorships campaign round.
                </Text>
                <Text>
                  3. You should visit
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Mentors')}>
                    <Text style={styles.link}> mentors page</Text>
                  </TouchableOpacity>
                  . There are tons of GREAT mentors in there.
                </Text>
                <Text>
                  4. If the mentor does not have a mentorship campaign, ask
                  politely over Twitter or LinkedIn.
                </Text>
                <Text>
                  5. If you want to work 1-1 with the mentor, ask the mentor to
                  add their contact & schedule info like a superpeer account on
                  GitHub profile readme. (This approach is not best way to be a
                  great mentee. Just know it, that is an option.)
                </Text>
              </View>
              <Text style={{marginTop: 10}}>
                If you're looking for someone on Twitter or LinkedIn to be a
                mentor for you. Ask them for joining us!
              </Text>
            </View>

            <View>
              <Text style={styles.subjectHeader}>Next steps:</Text>
              <Text style={styles.listHeader}>You find the:</Text>

              <View style={styles.listContent}>
                <Text>
                  · project for contribution (Active / Passive approach)
                </Text>
                <Text>
                  · mentor for getting feedback (Passive / Passive approach)
                </Text>
              </View>

              <Text style={styles.listHeader}>You meet with:</Text>
              <View style={styles.listContent}>
                <Text>· like minded people</Text>
                <Text>· great mentors</Text>
                <Text>· great friends to work with at discord channel</Text>
              </View>

              <Text style={styles.listHeader}>You will get eventually:</Text>
              <View style={styles.listContent}>
                <Text>· a great job</Text>
                <Text>· great mentors</Text>
                <Text>
                  · great mentorships for long term (lifelong/which I get)
                </Text>
              </View>
              <Text style={{marginTop: 10}}>Just tweet about these!</Text>
            </View>
            <View>
              <Text style={styles.subjectHeader}>Join Us</Text>
              <Link
                text="Click here"
                url="https://docs.google.com/forms/d/e/1FAIpQLSc3uWpEeBUCXMoGAJ5qm31p9URBppxXT5L4RJFrTOJee9TFjQ/viewform"
              />
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxHeader}>
              How To Be A 🌟ROCKSTAR🌟 Mentor?
            </Text>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Three</Text> types of
              mentorship models exist around the world. At least we know three
              of them. If you want to contribute this, You got this: ⚡️
            </Text>
            <Text style={styles.subjectHeader}>
              🌟🌟🌟 Active - Passive Mentorships
            </Text>
            <Text>
              The{' '}
              <Text style={{fontWeight: 'bold'}}>best way to be a mentor</Text>,
              engage the mentees in the flow w/o push harder or hussle.
            </Text>

            <Text style={styles.listHeader}>In active passive approach:</Text>

            <Text style={styles.listHeader}>Passive side:</Text>
            <View style={styles.listContent}>
              <Text>
                · <Text style={{fontWeight: 'bold'}}>mentor</Text> comes up with
                a complete blank project like this
              </Text>
              <Text>
                · <Text style={{fontWeight: 'bold'}}>mentor</Text> add the blank
                project under active mentorships.
              </Text>
              <Text>
                · <Text style={{fontWeight: 'bold'}}>mentor</Text> describes the
                project with a clear idea in the README.md.
              </Text>
            </View>

            <Text style={styles.listHeader}>Active side:</Text>
            <View style={styles.listContent}>
              <Text>
                · <Text style={{fontWeight: 'bold'}}>mentees</Text> are
                searching & digging the
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('ActiveMentorships')
                  }>
                  <Text style={styles.link}>
                    projects below the active mentorships page
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
            <Text style={styles.listHeader}>Next steps:</Text>
            <View style={styles.listContent}>
              <Text>
                · The mentor shares the mentorship campaign via social networks
                with (Twitter, LinkedIn)
              </Text>
              <Text style={{marginLeft: 20, opacity: 0.6}}>
                Example: I've created mentorship campaign over{' '}
                <Link
                  text="https://findmentor.network/peer/cagatay-cali"
                  url="https://findmentor.network/peer/cagatay-cali"
                />{' '}
                called find-mentor. The project aims to meet the mentors &
                mentees. Already have 300+ mentees & mentors exists. (That's
                cool recursion also, just the idea has been hacked.)
              </Text>
              <Text>
                · Join the{' '}
                <Link
                  text="Discord Server"
                  url="https://discord.com/invite/nkbmBSW8CM"
                />
                .
              </Text>
              <Text>
                · If any quick contact needs happen. Discord is fixing the
                communication needs.
              </Text>
              <Text style={{marginTop: 5, marginBottom: 5}}>
                In this approach, the mentor is the passive side of the
                equation. Mentees will be actively contributing to the
                mentorship project, they will learn how to do/build/lead the
                code.
              </Text>
              <Text style={{marginTop: 5, marginBottom: 5}}>
                This mentorships model is actually WORKING on this project.
                That's the reason you can read these lines.
              </Text>

              <Text style={styles.subjectHeader}>
                🌟🌟 Active - Active Mentorships
              </Text>
              <Text>
                In this model, the mentor sharing the contact way in
                <Link
                  text="GitHub profile readme"
                  url="https://github.com/abhisheknaiidu/awesome-github-profile-readme"
                />
              </Text>
              <Text style={{marginTop: 5, marginBottom: 5}}>
                The mentor and mentees contacting over social networks (twitter
                & linkedin & the discord channel), schedule the meeting
                daily/monthly etc.
              </Text>

              <Text style={styles.listHeader}>Pros:</Text>
              <View style={styles.listContent}>
                <Text>· Mentor & mentee contact directly.</Text>
                <Text>· Communication is two way.</Text>
              </View>
              <Text style={styles.listHeader}>Cons:</Text>
              <View style={styles.listContent}>
                <Text>
                  · The mentor has to allocate a spot time for mentees.
                </Text>
                <Text>· This approach can not be scalable.</Text>
              </View>

              <Text style={styles.subjectHeader}>
                🌟 Passive - Passive Mentorships
              </Text>
              <Text style={{marginTop: 5, marginBottom: 5}}>
                In this model, the mentor & mentee awaiting the feedback over
                <Link
                  text="https://findmentor.network "
                  url="https://findmentor.network"
                />
                below peer page.
              </Text>
              <Text style={{marginTop: 5, marginBottom: 5}}>
                This model also the greatest way to give & get feedback.
                <Link
                  text="How can you give a great feedback"
                  url="https://tr.lmgtfy.app/?q=how+can+I+give+better+feedback"
                />
              </Text>
              <Text style={styles.listHeader}>Pros:</Text>
              <View style={styles.listContent}>
                <Text>· Easy to communicate</Text>
                <Text>· Get & give feedback w/o dedicated time-consuming</Text>
                <Text>
                  · Everyone can read your feedback over the network. This
                  feedback is not only for them. Everyone will get the notice.
                </Text>
              </View>
              <Text style={styles.listHeader}>Cons:</Text>
              <View style={styles.listContent}>
                <Text>
                  · The mentees should ask the mentors for giving a feedback to
                  them. The mentors can be busy. Don't be rush.
                </Text>

                <Text style={styles.subjectHeader}>
                  Add mentorship projects
                </Text>
                <Text>
                  <Link
                    text="Click here"
                    url="https://docs.google.com/forms/d/e/1FAIpQLSeL6-beT2prYlrD3gyRqZz2ex94CNAe2T9-Ev2I_pd92BOS7g/viewform?embedded=true"
                  />
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxHeader}>How To Contact?</Text>
            <Text>
              If you want to contact any person without waiting for too long...
            </Text>
            <Text style={styles.todo}>( TO-DO )</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxHeader}>
              How GitHub Profile Should Look Like
            </Text>
            <Text style={styles.todo}>( TO-DO )</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxHeader}>
              How LinkedIn Profile Should Look Like
            </Text>
            <Text style={styles.todo}>( TO-DO )</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
  },
  box: {
    margin: 10,
    backgroundColor: '#e9ecef',
    padding: 10,
    paddingTop: 5,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    shadowColor: '#dcdcdc',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  boxHeader: {
    marginBottom: 5,
    fontSize: 22,
    color: '#212529',
    fontWeight: 'bold',
  },
  subjectHeader: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 20,
    color: '#212529',
    fontWeight: 'bold',
  },
  link: {
    color: '#007bff',
    position: 'relative',
    top: 4,
  },
  listHeader: {
    margin: 5,
    fontStyle: 'italic',
  },
  listContent: {
    marginLeft: 10,
  },
  todo: {
    color: '#e83e8c',
  },
});

export {HowItWorks};
