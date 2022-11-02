/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import useStudyFormStore from '../hooks/useStudyFormStore';

export default function StudyFormPage() {
  const studyFormStore = useStudyFormStore();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (study) => {
    const {
      title, topic, place, time, participants, hasgTags, body,
    } = study;

    await studyFormStore.createStudy({
      title, topic, place, time, participants, hasgTags, body,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>함께 할 때 더 즐거운 순간</h2>
      <p>**님 지식공유 플랫폼 코쉘린에서 다양한 사람을 만나고 생각의 폭을 넓혀보세요.</p>
      <div>
        <label htmlFor="input-title">제목</label>
        <input
          id="input-title"
          {...register('title', {
            required: true,
          })}
        />
        <div>
          <label htmlFor="input-topic">주제</label>
          <input
            id="input-topic"
            {...register('topic', {
              required: true,
            })}
          />
        </div>
      </div>
      <div>
        <label htmlFor="input-place">장소</label>
        <input
          id="input-place"
          {...register('place', {
            required: true,
          })}
        />
      </div>
      <div>
        <label htmlFor="input-time">일시</label>
        <input
          id="input-time"
          {...register('time', {
            required: true,
          })}
        />
      </div>
      <div>
        <label htmlFor="input-participants">인원</label>
        <input
          id="input-participants"
          {...register('participants', {
            required: true,
          })}
        />
      </div>
      <div>
        <label htmlFor="input-hashTags">해시태그</label>
        <input
          id="input-hashTags"
          {...register('hashTags', {
            required: true,
          })}
        />
      </div>
      <div>
        <label htmlFor="input-body">내용</label>
        <textarea
          id="input-body"
          rows="8"
          {...register('body', {
            required: true,
          })}
        />
      </div>
      <div>
        <button type="submit">
          글 등록하기
        </button>
      </div>
    </form>
  );
}
