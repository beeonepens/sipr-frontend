import { useState } from 'react';
import DemoSectionModal from './DemoSection/DemoSectionModal';

export default function DemoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((cval) => !cval);

  return (
    <>
      <div className="mt-2">
        <p className="text-base text-gray-700 dark:text-gray-300">
          Or{' '}
          <button
            type="button"
            onClick={toggleModal}
            className="text-primary-600 dark:text-primary-400 cursor-pointer hover:underline"
          >
            click here
          </button>{' '}
          to try the demo without signing up!
        </p>
      </div>

      <DemoSectionModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}
