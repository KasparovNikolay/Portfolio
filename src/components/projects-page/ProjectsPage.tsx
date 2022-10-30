import React, { FC, useId } from 'react';

import { mockProjects } from '../../utils/mockProjects';
import { Image } from '../ui-components/image';
import { Link } from '../ui-components/link';

import styles from './projectsPage.module.scss';

const ProjectsPage: FC = () => {
  const projects = mockProjects;
  const id = useId();
  return (
    <>
      {projects.map((item) => {
        return (
          <div key={id} className={styles.item}>
            {item.companyUrl ? (
              <Link type="outer" href={item.companyUrl}>
                {item.companyName}
              </Link>
            ) : (
              <span>item.companyName</span>
            )}
            {/**/}
            <div className={styles.item_img}>
              <Image src={item.companyLogo} />
            </div>
            {/**/}
            <p>{item.description}</p>
            {/**/}
            <div>
              Начало работы <span>{item.timeStart}</span>
            </div>
            <div>
              Окончание работы{' '}
              {item.timeEnd ? (
                <span>{item.timeEnd}</span>
              ) : (
                <span>По настоящее время</span>
              )}
            </div>
            {/**/}
            <div>
              {item.responsibilities.map(({ text }) => (
                <div key={text}>{text}</div>
              ))}
            </div>
            {/*  */}
            <div>
              {item.technologies.map((item) => (
                <div key={item.title}>
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
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectsPage;
