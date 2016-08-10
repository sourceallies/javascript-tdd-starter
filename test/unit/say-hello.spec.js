import sayHello from '../../src/say-hello'

import {expect} from 'chai';

describe('Say Hello', () => {
    it('should say hello when given a name', () => {
        const greeting = sayHello('Michael');

        expect(greeting).to.equal('Hello, Michael!');
    });
});