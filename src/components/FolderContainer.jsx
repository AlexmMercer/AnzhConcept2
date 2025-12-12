import { HiFolder } from 'react-icons/hi2';
import './FolderContainer.css';

const FolderContainer = ({ children }) => {
  return (
    <div className="folder-wrapper">
      <div className="folder-container">
        <div className="folder-spine">
          <div className="spine-content">
            <HiFolder className="spine-icon" />
            <span className="spine-text">ВоВсемПрав.ру</span>
          </div>
        </div>
        <div className="folder-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FolderContainer;
