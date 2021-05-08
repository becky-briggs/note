import React from 'react';
import NoteCard from './NoteCard';

class List extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.getNotes();
  }
  
  render() {
    const { notes } = this.props;

    const cards = notes.map((note, index) => {
      return (
        <NoteCard
          key={index}
          index={index}
          note={note}
        />
      );
    });

    return (
      <div className="list-container">
        List Component
      </div>
    );
  }
}

export default List;