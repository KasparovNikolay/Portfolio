import React, { FC } from 'react';

import { Accordion } from '@ui/accordion';
import { Image } from '@ui/image';
import { InfinitLooper } from '@ui/infinit-looper';
import { Link } from '@ui/link';
import { ExpirienceType, mockProjects } from '@utils/mocks';

import styles from './projectsPage.module.scss';

const TimeComponent = ({ item }: { item: ExpirienceType }) => {
  return (
    <div className={styles.item_time}>
      <div>
        Начало работы <span>{item.timeStart}</span>
      </div>
      {item.timeEnd && (
        <>
          <br />
          <div>
            Окончание работы <span>{item.timeEnd}</span>
          </div>
        </>
      )}
    </div>
  );
};

const ProjectsPage: FC = () => {
  const projects = mockProjects;
  return (
    <div className={styles.wrap}>
      {projects.map((item) => {
        return (
          <div key={item.companyName} className={styles.item}>
            {item.companyUrl ? (
              <Link type="outer" href={item.companyUrl}>
                {item.companyName}
              </Link>
            ) : (
              <span>{item.companyName}</span>
            )}
            <div className={styles.item_img}>
              <Image src={item.companyLogo} />
            </div>
            <p className={styles.description}>{item.description}</p>
            <TimeComponent item={item} />
            <Accordion
              buttonElement={<button className="sdfsdf">loh-pidr</button>}
            >
              {item.responsibilities.map(({ text }) => (
                <div key={text}>{text}</div>
              ))}
            </Accordion>
            <InfinitLooper speed={10} direction="right">
              {item.technologies.map((item) => (
                <div className={styles.tech} key={item.title}>
                  <Image
                    src={item.imgUrl}
                    style={{
                      width: '20px',
                      filter:
                        'invert(65%) sepia(99%) saturate(553%) hue-rotate(352deg) brightness(96%) contrast(105%)',
                    }}
                  />
                  <span>{item.title}</span>
                </div>
              ))}
            </InfinitLooper>
          </div>
        );
      })}
      <div className={styles.timeLine}></div>
    </div>
  );
};

export default ProjectsPage;
