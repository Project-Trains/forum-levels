import app from 'flarum/app';
import ForumLevelsSettingsModal from './components/LevelRanksSettingsModal';

app.initializers.add('reflar-level-ranks', () => {
    app.extensionSettings['reflar-level-ranks'] = () => app.modal.show(new ForumLevelsSettingsModal());
});
