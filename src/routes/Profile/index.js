import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { useQuery } from 'react-query';

import { db } from 'app';
import { Card, Container } from 'components';
import { USERNAME } from 'utils/globals';

import Friendster from 'assets/friendster.png';
import Meca from 'assets/meca.png';
import PicOne from 'assets/pic-one.jpg';
import PicTwo from 'assets/pic-two.jpg';
import PicThree from 'assets/pic-three.jpg';
import PicFour from 'assets/pic-four.jpg';
import Kabet from 'assets/kabet.mp3';

import './style.scss';

function Profile() {
  const { data: messages } = useQuery(
    'messages',
    () => getDocs(collection(db, 'messages')),
    {
      select: (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
          messages.push(doc.data());
        });
        return messages;
      },
    }
  );

  useEffect(() => {
    document.title = "Friendster | <3 mecagi <3's Profile";
  }, []);

  return (
    <div className="Profile">
      <Container className="Profile_container">
        <img src={Friendster} alt="Friendster Logo" />
        <div className="Profile_navbar">
          <a className="Profile_navbar_link" href="/profile">
            Home
          </a>
          <a className="Profile_navbar_link" href="/profile">
            Profile
          </a>
          <a className="Profile_navbar_link" href="/profile">
            Apps
          </a>
          <a className="Profile_navbar_link" href="/profile">
            Connections
          </a>
          <a className="Profile_navbar_link" href="/profile">
            Explore
          </a>
          <a className="Profile_navbar_link" href="/profile">
            Search
          </a>
        </div>
        <div className="Profile_grid">
          <div>
            <Card label={USERNAME}>
              <div className="Profile_about">
                <img className="Profile_about_image" src={Meca} alt="Meca" />
                <div>
                  <p className="Profile_bubble">
                    minsan s buhay ika'y nadapa..
                    <br />
                    gumulong, naputikan, naapakan ng iba..
                    <br />
                    pro na22 k ring bumangon humarap sa lhat at nagsabi...
                    <br />
                    "lasing lang akoh mga fwendz.."
                  </p>
                  <p className="Profile_about_bio">
                    Female, 22, In a Relationship
                    <br />
                    Interested In: Friends
                    <br />
                    Member Since: Oct 2008
                    <br />
                    Location: Philippines xD
                    <br />
                    Hometown: Inabanga, Bohol
                    <br />
                    College: UP Cebu (isko {`<3`})
                  </p>
                </div>
              </div>
            </Card>
            <Card label={`${USERNAME}'s Photo Gallery`}>
              <div className="Profile_gallery">
                <div
                  className="Profile_gallery_photo"
                  style={{ backgroundImage: `url(${PicOne})` }}
                />
                <div
                  className="Profile_gallery_photo"
                  style={{ backgroundImage: `url(${PicTwo})` }}
                />
                <div
                  className="Profile_gallery_photo"
                  style={{ backgroundImage: `url(${PicThree})` }}
                />
                <div
                  className="Profile_gallery_photo"
                  style={{ backgroundImage: `url(${PicFour})` }}
                />
              </div>
            </Card>
            <Card label={`Testimonials and Comments for ${USERNAME}`}>
              {messages?.map((m) => {
                const { avatar, message, username } = m;
                return (
                  <div className="Profile_comment">
                    <div
                      className="Profile_avatar"
                      style={{ backgroundImage: `url(${avatar})` }}
                    />
                    <div>
                      <p className="Profile_comment_username">{username}</p>
                      <p className="Profile_comment_message">{message}</p>
                    </div>
                  </div>
                );
              })}
            </Card>
          </div>
          <div>
            <Card label={`${USERNAME}'s Music`}>
              <audio className="Profile_player" src={Kabet} autoPlay controls />
            </Card>
            <Card label={`${USERNAME}'s Friends`}>
              <div>
                {messages?.map((m) => {
                  const { avatar, username } = m;
                  return (
                    <div>
                      <div
                        className="Profile_avatar"
                        style={{ backgroundImage: `url(${avatar})` }}
                      />
                      <p className="Profile_friend_username">{username}</p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
