import React from 'react';
import { motion } from 'framer-motion';
import { styles } from './styles';
import { services } from './constants';
import { fadeIn, textVariant } from './utils/motion';
import { SectionWrapper } from './hoc';


const Ingresar = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Ingresar</p>
        <h2 className={styles.sectionHeadText}></h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        
      </div>
    </div>
  );
};

export default SectionWrapper(Ingresar, 'ingresar');
