import React from 'react';

class Note extends React.Component {
  render() {
    const { note } = this.props;
    
    return (
      <form className="note-form">
          <input
            className="note-title-input"
            type="text"
            placeholder="Note Title..."
            defaultValue={note.title}
          />
          <textarea
            className="note-textarea"
            placeholder="Type Here..."
            defaultValue={note.content}
          />
          <input className="note-button" type="submit" value="Submit" />
        </form>
    );
  }
}

export default Note;