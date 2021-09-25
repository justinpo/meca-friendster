import { yupResolver } from '@hookform/resolvers/yup';
import { collection, addDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import * as yup from 'yup';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { db, storage } from 'app';
import { Button, Card, Container, Input, TextArea } from 'components';
import { USERNAME } from 'utils/globals';

import Meca from 'assets/meca.png';

import './style.scss';

const schema = yup.object().shape({
  username: yup.string().required().label('Username'),
  message: yup.string().required().label('Message'),
});

function Message() {
  const [file, setFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function addMessage(body) {
    return addDoc(collection(db, 'messages'), body);
  }

  const { isLoading, mutate: postMessage } = useMutation(addMessage, {
    onSuccess: () => setIsUploaded(true),
  });

  async function onSubmit(formData) {
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    const avatarUrl = await getDownloadURL(storageRef);
    postMessage({
      ...formData,
      avatar: avatarUrl,
    });
  }

  function onFileChange(e) {
    const image = e.target.files[0];
    setFile(image);
  }

  return (
    <div className="Message">
      <Container className="Message_container">
        <Card label={`Message for ${USERNAME}`}>
          <div className="Message_card">
            {isUploaded ? (
              <div className="Message_thanks">
                <img className="Message_thanks_image" src={Meca} alt="Meca selfie" />
                <h1 className="Message_thanks_message">
                  tenks <span>{`<3`}</span>
                </h1>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Message_grid">
                  <p className="Message_label">Avatar:</p>
                  <input
                    accept="image/png, image/jpeg"
                    className="Message_avatar"
                    disabled={isLoading}
                    id="avatar"
                    multiple={false}
                    name="avatar"
                    type="file"
                    onChange={onFileChange}
                  />
                  <p className="Message_label">Username:</p>
                  <Input
                    error={errors.username?.message}
                    isDisabled={isLoading}
                    name="username"
                    placeholder="e.g. bo$$Jh3p0y"
                    register={register}
                  />
                  <p className="Message_label">Message:</p>
                  <TextArea
                    className="Message_textarea"
                    error={errors.message?.message}
                    isDisabled={isLoading}
                    name="message"
                    placeholder="e.g. tangina mo jhepoy dizon"
                    register={register}
                  />
                  <div />
                  <Button isDisabled={isLoading} type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default Message;
