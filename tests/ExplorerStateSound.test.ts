import { mergeViewerSessionState } from '../src/explorer-state/merge';

describe('viewer session tabs', () => {
  it('restores the Sound browser as the active tab', () => {
    expect(mergeViewerSessionState({ activeView: 'sound' }).activeView).toBe('sound');
  });

  it('falls back for unsupported tab values', () => {
    expect(mergeViewerSessionState({ activeView: 'unknown' }).activeView).toBe('bmd');
  });
});
